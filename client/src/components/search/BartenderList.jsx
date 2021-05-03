
export default function BartenderList({ countryList = [] }) {
  return (
    <>
      {bartenderList.map((bartender, index) => {
        if (bartender) {
          return (
            <div key={bartender.name}>
              <h1>{bartender.name}</h1>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}


