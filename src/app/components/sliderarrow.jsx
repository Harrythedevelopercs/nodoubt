
import { ArrowIcon } from "@/src/app/app-constants";


const SliderArrow = ({ onPrev, onNext, center }) => {

    return (
        <div className={center === "yes" ? "centerMode embla_container" : "embla_container"}>
            <div className="embla_prev" onClick={onPrev}>
                <ArrowIcon direction="prev" />
            </div>
            <div className="embla_next" onClick={onNext}>
                <ArrowIcon direction="next" />
            </div>
        </div>
    )
}

export default SliderArrow