import { Typography } from "@material-tailwind/react";
import BlogPost from "../components/BlogPost";
import Pagination from "../components/Pagination";

function Blog () {
    return <div>
        <Typography variant="h1" className="text-center">Blog</Typography>
        <div className="mt-12 flex gap-12">
            <BlogPost 
                postName={'Développement de mon site'}
                catchphrase={'Découvrez comment se déroule le développement de cite, les technologies utilisées et ses fonctionnalités !'}
                date={'10/06/2023'}
            />
            <BlogPost 
                postName={'Développement de mon site'}
                catchphrase={'Découvrez comment se déroule le développement de cite, les technologies utilisées et ses fonctionnalités !'}
                date={'10/06/2023'}
            />
            <BlogPost 
                postName={'Développement de mon site'}
                catchphrase={'Découvrez comment se déroule le développement de cite, les technologies utilisées et ses fonctionnalités !'}
                date={'10/06/2023'}
            />
        </div>

        <div className="mt-12 mx-auto ">
            <Pagination />
        </div>
    </div>
}

export default Blog;