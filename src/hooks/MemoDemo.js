import React, { useState, useEffect ,memo} from 'react'
function comparePerson(prevprops,nextprops){
    console.log(prevprops,nextprops);
    if(prevprops.person.age!==nextprops.person.age){//重新渲染
        return false;
    }
    return true;//不重新渲染

}

function MemoDemo() {
    const [index, setIndex] = useState(0);
    const [person,setPerson] = useState({name:'lili',age:27});
    useEffect(() => {
       setTimeout(()=>{
        setPerson({
                ...person,age:'33'
        })
       },1000)
    }, [])
    return <div>
        {index}
        <ShowName person={person}></ShowName>
    </div>
}
const ShowName = memo(({person}) => {
    console.log('child render');
    return <div>{person.name}</div>

},comparePerson)

export default MemoDemo;