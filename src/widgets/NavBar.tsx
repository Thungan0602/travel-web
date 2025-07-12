export function Navbar() {
    return (
        <div>
            <div className="flex gap-6">
                <div className="lg:flex hidden gap-6 items-center">
                    <p className="font-normal">Home</p>
                    <div className="flex gap-1 font-normal">
                        <p>Tours</p>
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>
                    <div className="flex gap-1 font-normal">
                        <p>Service</p>
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>
                    <div className="flex gap-1 font-normal">
                        <p>MICE</p>
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>
                    <div className="font-normal">
                        <p>Blog</p>
                    </div>
                    <div className="flex gap-1 font-normal">
                        <p>About us</p>
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>
                    <div className="font-normal border-r-2 border-black pr-6">
                        <p>Membership</p>
                    </div>
                </div>
            </div>
        </div >
    );
}