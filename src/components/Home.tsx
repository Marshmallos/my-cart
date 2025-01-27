import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
function useData() {
  return [
    { id: 1, title: "Cookie", img: "", alt: "Cookie" },
    { id: 2, title: "Muffins", img: "", alt: "Muffins" },
    { id: 3, title: "Cupcakes", img: "", alt: "Cupcakes" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  const { data, status } = useQuery({ queryKey: ["data"], queryFn: useData });

  return (
    <>
      <div className="flex flex-col justify-center items-center pt-5">
        <div className="rounded-md border border-purple-300 w-4/5">
          <img src="" alt="PromoBundles"></img>
          <div>Promo Bundles</div>
        </div>
        <div className="grid grid-cols-2 gap-28 pt-5">
          {status === "success" &&
            data.map((item) => (
              <div
                key={item.id}
                className="rounded-md border border-purple-400"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img src={item.img} alt={item.alt}></img>
                <div>{item.title}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
