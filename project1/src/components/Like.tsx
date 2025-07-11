import useLike from "../hooks/useLike"

const Like = () => {
    const { like, handleLike, handlUnLike, handleReset } = useLike()
    return (
        <>
            <div className="card">
                <h4 style={{fontSize: "30px"}}>❤️{like}</h4>
                <div className="btn">
                    <button  onClick={handleLike}>👍</button>
                    <button onClick={handlUnLike}>👎</button>
                    <button onClick={handleReset}>🔄️</button>
                </div>
            </div>
        </>
    )
}

export default Like