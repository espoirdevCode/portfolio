
export default function Loading() {

    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className=" flex justify-center items-center size-full gap-5">
                <span className="loading loading-spinner loading-lg"></span>
                <span className="loading loading-spinner loading-lg"></span>
                <span className="loading loading-spinner loading-lg"></span>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        </div>
    )
}
