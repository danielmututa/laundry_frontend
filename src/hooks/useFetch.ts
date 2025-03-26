// import { apiClient } from "@/context/axios";
// import { unexpectedErrorMessage } from "@/lib/utils";
// import axios from "axios";
// import { useEffect, useState } from "react"


// function useFetch<T>(url: string) {
//     const [data, setData] = useState<T | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     const fetchData = async () => {
//         try {
//             const response = await apiClient.get<T>(url);
//             setData(response.data);
//         } catch (error) {
//             if (axios.isAxiosError(error)) {
//                 setError(error.response?.data.message);
//             }

//             setError(unexpectedErrorMessage);

//         } finally {
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, [url])

//     return { data, loading, error, refetch: fetchData };


// }

// export default useFetch