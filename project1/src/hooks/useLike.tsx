import { useState } from "react"

const useLike = () => {
    const [like , setLike] = useState<number>(0)

    const handleLike = () => {
        setLike(like + 1)
    }

    const handlUnLike = () => {
        if(like <= 0) {
            setLike(0)
        }else {
            setLike(like -1)
        }
    }

    const  handleReset = () => {
        setLike(0)
    }

    return {
        like ,
        handleLike,
        handlUnLike,
        handleReset
    }
}

export default useLike