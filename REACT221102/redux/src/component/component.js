import { useSelector } from "react-redux"

const Component = () => {
    const state = useSelector((state) => state.data);
    return (
        <div style={{
            border: '1px solid black',
            borderRadius: '16px',
            padding: '16px',
        }}>
            {JSON.stringify(state)}
        </div>
    )
}

export default Component;