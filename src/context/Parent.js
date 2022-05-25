
export default function Parent({ children }) {

    function doSomething(value) {
        console.log("doSomething called by child with value:", value);
    }


    return (
        <>
            {children(doSomething)}
        </>
    )
}