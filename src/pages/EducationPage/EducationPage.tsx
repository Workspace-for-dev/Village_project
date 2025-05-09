import { useEffect, useState } from "react";
import MoreInfoBtn from "../../components/MoreInfoBtn/MoreInfoBtn";
import { ArrowButton, ButtonGrid, IntroWrapper } from "./styles";
import introText from "./intro.md?raw";
import ReactMarkdown from "react-markdown";
import { FaChevronLeft } from "react-icons/fa";
import YourAreHere from "../../components/YourAreHere/YouAreHere";

function EducationPage() {
  const [data, setData] = useState<string[]>([]);
  const CACHE_KEY = "educationPageData";

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { values } = JSON.parse(cached);
      setData(values);
      // console.log("✅ Downloaded from cache");
    }

    const fetchData = async () => {
      try {
        const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID;
        const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
        const range = "EducationPage!A2:A10";

        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
        const response = await fetch(url);
        const result = await response.json();

        const values = result.values?.flat() || [];
        setData(values);

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: new Date().getTime(),
            values,
          })
        );

        // console.log("🌐 Updated from API and saved to cache");
      } catch (error) {
        console.error("Error by loading:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <>
        <YourAreHere /> 
        
        <IntroWrapper>
          <ReactMarkdown>{introText}</ReactMarkdown>
        </IntroWrapper>

        <ButtonGrid>
          {data.map((item, index) => (
            <MoreInfoBtn key={index} title={item} />
          ))}
        </ButtonGrid>

        <ArrowButton onClick={() => (window.location.href = "/")}>
          <FaChevronLeft /> Zur vorherigen Seite
        </ArrowButton>
      </>
    </>
  );
}

export default EducationPage;
