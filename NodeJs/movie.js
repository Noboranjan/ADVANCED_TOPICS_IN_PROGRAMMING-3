/*module.exports={
    favMovie:"God Father"
}*/
var movie={
    favMovie: "SpiderMan"
};
function Mymovie()
{
    return movie.favMovie;
}
module.exports.favMovie= Mymovie();