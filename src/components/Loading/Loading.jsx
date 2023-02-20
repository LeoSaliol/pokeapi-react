const GIF_LINK = "https://media.tenor.com/znsiJVLP3UwAAAAC/happy-togepi.gif";

const Loading = () => {
    return (
        <div className="text-center mt-5 ">
            <img src={GIF_LINK} alt="Gif Togepi" style={{ width: "250px" }} />
        </div>
    );
};

export default Loading;
