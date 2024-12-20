export default function Footer() {
    return (
        <footer className="mt-auto py-3 border-t dark:border-white/10 bg-white dark:bg-bgdark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center">
                    Copyright © <span id="year">2024</span>
                    <a href="javascript:void(0)" className="text-primary">
                        Sazxt
                    </a>
                    . Designed with <span className="ri ri-heart-fill text-red-500" /> by{" "}
                    <a className="text-primary" href="javascript:void(0)">
                        {" "}
                        Spruko{" "}
                    </a>{" "}
                    All rights reserved
                </p>
            </div>
        </footer>
    )
}