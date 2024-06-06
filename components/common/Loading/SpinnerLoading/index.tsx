import s from './SpinnerLoading.module.css';

const SpinnerLoading = ({className = ""}) => {
    return (
        <div className={className + " " + s.loader}></div>
    );
};

export default SpinnerLoading;