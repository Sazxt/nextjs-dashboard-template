export default function Breadcrumbsheader() {
    return (
        <div className="block justify-between page-header md:flex">
            <div>
                <h3 className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-white text-2xl font-medium">
                    {" "}
                    Dashboard
                </h3>
            </div>
            <ol className="flex items-center whitespace-nowrap min-w-0">
                <li className="text-sm">
                    <a
                        className="flex items-center font-semibold text-primary hover:text-primary dark:text-primary truncate"
                        href="javascript:void(0);"
                    >
                        {" "}
                        Home{" "}
                        <i className="ti ti-chevrons-right flex-shrink-0 mx-3 overflow-visible text-gray-300 dark:text-gray-300 rtl:rotate-180" />
                    </a>
                </li>
                <li
                    className="text-sm text-gray-500 hover:text-primary dark:text-white/70 "
                    aria-current="page"
                >
                    {" "}
                    Dashboard{" "}
                </li>
            </ol>
        </div>
    )
}