import { useRouter } from "next/router"

export default function userDetail() {
    const router = useRouter();
    const {id} = router.query;
    return (
        <div>
            <p>Hello {id}</p>
        </div>
    )
}