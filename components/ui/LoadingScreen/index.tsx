import Image from "next/image";
import style from "./LoadingScreen.module.css";

const LoadingScreen = () => {
    return (
        <div
            className="relative bg-white/10 w-screen h-screen overflow-hidden flex flex-col items-center justify-center">
            <div className={style.scene}>
                <div className={style["cube-wrapper"]}>
                    {/* <div className={style.cube}>
                        <div className={style['cube-faces']}>
                            <div className={`${style['cube-face']} ${style.shadow}`}></div>
                            <div className={`${style['cube-face']} ${style.bottom}`}></div>
                            <div className={`${style['cube-face']} ${style.top}`}></div>
                            <div className={`${style['cube-face']} ${style.left}`}></div>
                            <div className={`${style['cube-face']} ${style.right}`}></div>
                            <div className={`${style['cube-face']} ${style.back}`}></div>
                            <div className={`${style['cube-face']} ${style.front}`}></div>
                        </div>
                    </div> */}
                    <Image
                        src={"/logo/logo.svg"}
                        alt={"login-education-img"}
                        width={150}
                        height={150}
                    />
                </div>
            </div>
            <span className={"text-2xl "}>در حال بارگذاری ...</span>
        </div>
    );
};

export default LoadingScreen;
