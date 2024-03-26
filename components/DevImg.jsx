import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} alt="dev image" priority fill />
        </div>
    );
};

export default DevImg;
