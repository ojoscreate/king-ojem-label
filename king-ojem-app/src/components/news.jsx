import Marquee from 'react-fast-marquee';

export default function News( {image = []}) {

   const Updates = 
         [
            { 
                id: 0,
                now: "This is 0 This is 1",
                image: image[0]
            },
            { 
                id: 1,
                now: "This is 1 This is 2 This is 2 This is 2",
                image: ""
            },
            { 
                id: 2,
                now: "This is 2 This is 3 This is 3 This is 3 ",
                image: ""
            },
            { 
                id: 3,
                now: "This is 3 This is 4 This is 4 This is 4 ",
                image: ""
            },
            { 
                id: 4,
                now: "This is 4 This is 5 This is 5 This is 5 ",
                image: ""
            },
            { 
                id: 5,
                now: "This is 5 This is 0",
                image: image[1]
            }
        ]

    return(
        <>
            <div className= "marquee">
                <Marquee.default speed={100} pauseOnHover={true} gradient={false}>
                    {Updates.map((update) => (
                        <div key={update.id} className="marquee_container">
                            <span className='para-news' >{update.now}</span> 
                            {update.image!== "" && (<img src={update.image} alt= {update.now} className='img-news'/>) }
                            
                        </div>
                    ))}
            
                </Marquee.default>
            </div>
        </>
    )
};