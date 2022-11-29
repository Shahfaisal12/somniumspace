import { useRouter } from "next/router"

const blogNo = () => {
    const router = useRouter();
    const number = router.query.blogNo;
  return (
    <div>blog{number}</div>
  )
}

export default blogNo;