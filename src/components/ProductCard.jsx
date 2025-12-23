import { Card, Button } from "flowbite-react"
import { useRef, useState, useEffect } from "react"
import Image1 from "../assets/cardImg.png"
import Image2 from "../assets/CardImg2.png"
import Image3 from "../assets/CardImg3.png"
import Image4 from "../assets/CardImg4.png"
import Image5 from "../assets/CardImg5.png"
import Image6 from "../assets/CardImg6.png"
import Image7 from "../assets/CardImg7.png"
import Image8 from "../assets/CardImg8.png"
import Image9 from "../assets/CardImg9.png"
import Image10 from "../assets/CardImg10.png"
import Image11 from "../assets/CardImg11.png"
import Image12 from "../assets/CardImg12.png"
import Image13 from "../assets/CardImg13.png"
import Image14 from "../assets/CardImg14.png"
import Image15 from "../assets/CardImg15.png"
import { FaAngleLeft, FaAngleRight, FaChevronLeft } from "react-icons/fa6";


export default function ProductCard() {
	const productDdata = [
		{ productImg: Image1, producthead: "OverSized Sweatrer", productPrice: "56$" },
		{ productImg: Image2, producthead: "OverSized Sweatrer", productPrice: "56$" },
		{ productImg: Image3, producthead: "OverSized Sweatrer", productPrice: "56$" },
		{ productImg: Image4, producthead: "OverSized Sweatrer", productPrice: "56$" },
		{ productImg: Image5, producthead: "OverSized Sweatrer", productPrice: "56$" },
		{ productImg: Image6, producthead: "OverSized Sweatrer", productPrice: "56$" },
		{ productImg: Image7, producthead: "OverSized Sweatrer", productPrice: "56$" },
		{ productImg: Image8, producthead: "OverSized Sweatrer", productPrice: "56$" },
		{ productImg: Image9, producthead: "OverSized Sweatrer", productPrice: "56$" },
		{ productImg: Image10, producthead: "OverSized Sweatrer", productPrice: "56$" },
		{ productImg: Image11, producthead: "OverSized Sweatrer", productPrice: "56$" },
		{ productImg: Image12, producthead: "OverSized Sweatrer", productPrice: "56$" },
		{ productImg: Image13, producthead: "OverSized Sweatrer", productPrice: "56$" },
		{ productImg: Image14, producthead: "OverSized Sweatrer", productPrice: "56$" },
		{ productImg: Image15, producthead: "OverSized Sweatrer", productPrice: "56$" }



	]
	const trackRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerView, setItemsPerView] = useState(5);

	useEffect(() => {
		const updateView = () => {
			if (window.innerWidth >= 1024) setItemsPerView(5);
			else if (window.innerWidth >= 768) setItemsPerView(3);
			else setItemsPerView(1);
		};

		updateView();
		window.addEventListener("resize", updateView);
		return () => window.removeEventListener("resize", updateView);
	}, []);

	// 🔹 Move slider
	useEffect(() => {
		if (!trackRef.current) return;

		const card = trackRef.current.children[0];
		if (!card) return;

		const gap = 16;
		const cardWidth = card.offsetWidth + gap;

		trackRef.current.style.transform = `translateX(-${currentIndex * cardWidth
			}px)`;
	}, [currentIndex]);

	const maxIndex = productDdata.length - itemsPerView;

	const next = () => {
		if (currentIndex < maxIndex) {
			setCurrentIndex((prev) => prev + 1);
		}
	};

	const prev = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prev) => prev - 1);
		}
	};

	return (

		<>
			<div className="window-viewport overflow-hidden w-[100%]">
				<div className="buttons flex justify-end gap-2 m-4">
					<Button className="p-4 bg-orange-300 hover:bg-orange-500  text-blue-200 rounded-full" onClick={prev} disabled={currentIndex === 0}><FaAngleLeft /></Button>
					<Button className="p-4 bg-orange-300 hover:bg-orange-500  text-blue-200 rounded-full" onClick={next} disabled={currentIndex === maxIndex}><FaAngleRight /></Button>

				</div>
				<div className="product-card flex gap-[16px] transition-transform ease duration-300" ref={trackRef}>
					{
						productDdata.map((item, index) => (
							<Card
								className="max-w-md flex-none lg:basic-1/5 md:basic-1/3 sm:basic-full " key={index}>
								<div className="product-items">
									<img
									className="w-[100%] h-[360px] object-cover rounded-xl"
									src={item.productImg}
									alt={item.producthead}
								/>

								<a href="#">
									<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
										{item.producthead}
									</h5>
								</a>

								<div className="flex items-center justify-between">
									<span className="text-3xl font-bold text-gray-900 dark:text-white">{item.productPrice}</span>
									<a
										href="#"
										className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
									>
										Add to cart
									</a>
								</div>
								</div>
							</Card>

						))
					}
				</div>
			</div>
		</>
	)
}
