export default function SeatIcon({ width = "1.5rem", height = "1.5rem", color = "#54479B" }) {
    return (
        <svg
            style={{ width: width, height: height }}
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Airplane seat icon"
            focusable="false"
        >
            <title>Airplane seat</title>
            <path
                d="M21,22H9c-.503,0-.762-.332-.851-.474-.088-.144-.269-.523-.044-.974l1.005-2.009c.777,.296,1.614,.456,2.48,.456h7.409c.881,0,1.714-.385,2.286-1.057s.817-1.561,.674-2.44c-.232-1.427-1.551-2.503-3.066-2.503h-7.289c-.45,0-.846-.303-.964-.736l-.618-2.264h8.978c.552,0,1-.447,1-1s-.448-1-1-1H9.475l-1.549-5.668C7.52,.784,6.076-.214,4.564,.008c-.844,.124-1.598,.603-2.067,1.313-.469,.71-.615,1.59-.396,2.421l2.733,10.089c.415,1.53,1.324,2.828,2.526,3.741l-1.043,2.086c-.468,.938-.419,2.028,.132,2.919s1.504,1.423,2.552,1.423h12c.552,0,1-.447,1-1s-.448-1-1-1ZM4.033,3.227c-.073-.278-.026-.563,.133-.803,.158-.24,.449-.446,.812-.446,.45,0,.881,.357,1.016,.872l2.716,9.941c.355,1.301,1.545,2.209,2.894,2.209h7.289c.537,0,1.017,.362,1.093,.824,.049,.304-.03,.596-.224,.823-.19,.224-.468,.353-.762,.353h-7.409c-2.253,0-4.237-1.519-4.826-3.692L4.033,3.227Z"
                fill={color}
            />
        </svg>
    );
}
