import { useState } from 'react';
import toast from 'react-hot-toast';
import Input from "../components/Input";
import Output from "../components/Output";

const Home = (props) => {
    const [data, setData] = useState('');
    const [shortenedURL, setShortURL] = useState('');

    const shortURL = () => {
		if(data.length > 0) {
			if(validURL(data)) {
				setShortURL("Generating");
				fetch('https://api.shrtco.de/v2/shorten?url=' + data)
					.then(response => response.json())
					.then(res => {
						setShortURL(res.result.full_short_link)
					});
			} else {
				toast.error('Invalid URL');
			}
		}
		setData('');
	}

	const validURL = (str) => {
		var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
			'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
			'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
			'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
		return !!pattern.test(str);
	}

    return (
        <div className="splash-container">
            <div className="splash">
                <Input data={data} setData={setData} shortURL={shortURL}/>
                <Output shortenedURL={shortenedURL} />
            </div>
        </div>
    );
};

export default Home;