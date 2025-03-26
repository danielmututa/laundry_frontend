import { useEffect } from "react";

const usePageTitle = (title: string) => {
    useEffect(() => {
        document.title = `${title} - Laundry`;
    }, [title])
}

export default usePageTitle;