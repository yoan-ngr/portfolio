import {Carousel, IconButton} from "@material-tailwind/react";

function ProjectCarousel () {
    return <Carousel loop={true} autoplay={true} className="rounded-xl" navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
                <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                />
            ))}
        </div>
    )} prevArrow={({ handlePrev }) => (
        <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
            </svg>
        </IconButton>
    )}
                     nextArrow={({ handleNext }) => (
                         <IconButton
                             variant="text"
                             color="white"
                             size="lg"
                             onClick={handleNext}
                             className="!absolute top-2/4 !right-4 -translate-y-2/4"
                         >
                             <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth={2}
                                 stroke="currentColor"
                                 className="h-6 w-6"
                             >
                                 <path
                                     strokeLinecap="round"
                                     strokeLinejoin="round"
                                     d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                 />
                             </svg>
                         </IconButton>
                     )}>
        <img
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="image 1"
            className="h-full w-full object-cover object-center"
        />
        <img
            src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="image 2"
            className="h-full w-full object-cover object-center"
        />
        <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 3"
            className="h-full w-full object-cover object-center"
        />
    </Carousel>
}

export default ProjectCarousel;