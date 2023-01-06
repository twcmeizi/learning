import React, { useState, memo, useMemo, useCallback } from 'react'

export default function UseMemo() {
    const [count, setCount] = useState(1);
    const [first, setFirst] = useState(0);
    const result = useMemo(() => {
        console.log('usememo')
        return count * 2;
    }, [count])
    const cbfn = useCallback(() => {
        setCount(0)
    }, [])
    return (
        <div>
			{count} {result}{first}	
			<button onClick={()=>setFirst(first+1)}>+1</button>
			<Foo cbfn={cbfn}/>
    	</div>)
}

const Foo = memo(function Foo() {
    console.log('foo refresh')
    return (
        <div>
		foo
		</div>)
})