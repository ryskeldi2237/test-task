import React, {useRef, useEffect} from 'react'
import { gsap } from "gsap";
export default function Main() {
    const boxRef = useRef();
    useEffect(() => {
        gsap.to(boxRef.current, { rotation: "+=360" });
      }, []);
    return (
        <main className="main">
            <div className="main__title" ref={boxRef} >The essential line</div>
        </main>
    )
}
