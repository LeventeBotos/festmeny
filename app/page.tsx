import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col bg-white text-black  gap-2 items-center">
      <img
        className="w-full md:w-auto self-center h-96 object-cover"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Caspar_David_Friedrich_-_Das_Eismeer_-_Hamburger_Kunsthalle_-_02.jpg/440px-Caspar_David_Friedrich_-_Das_Eismeer_-_Hamburger_Kunsthalle_-_02.jpg"
      />
      <p className="text-xl md:text-2xl font-semibold">
        Caspar David Friedrich:
      </p>
      <p className="text-2xl md:text-4xl font-bold">A Jégtenger</p>
      <div className="flex flex-col items-center px-2 pb-10 md:w-2/3 w-full gap-5 text-md font-semibold pt-3 md:text-lg">
        <p>A képen egy feltolódott jéghegyet látunk, mibe egy hajó ütközött.</p>
        <p>
          {" "}
          Ez egy panteista kép, azaz Isten nagyságát a természet csodájában
          leli. Ha a képet úgz értelmezzük, hogy a jég a hatalmas emberfeletti
          erő, a háttérben a hajó, pedig a parányni ember, ehhez képest.
        </p>
        <p>
          A képen egy jéghegynek ütközött hajót látunk a háttérben, ami az ember
          természet általi kiszolgáltatottságát mutatja.{" "}
        </p>
        <p>
          Caspar David Friedrich-nek személyes traumája van a jéggel, hiszen
          öccse úgy halt, meg hogy a jég beszakadt alatta, megfulladt. Ezt Dávid
          végignézte.{" "}
        </p>
        <p>
          A képen érzékelhetjük a nyomasztó hangulatot, ami jellemzi Dávidot.
        </p>
        <p>
          Az ember soha sem győzheti le a természetet. Ez a felfogás jellemzi a
          festészetét gyermekkora óta.
        </p>
        <p>
          Dávidra jellemző a szimbolizmus, így a hajó szimbolizálhatja a halott
          öccsét. Így ez a festmény ábrázolja öccse halálát.
        </p>
        {/* <p>
          A festmény Caspar David Friedrich német romantikus festő 1823 és 1824
          között készült olajfestménye. Az alkotás az Északi-sarkot ábrázolja,
          ahol egy hajótörés látható óriási jégdarabok között. Bár Friedrich
          soha nem járt az Északi-sarkon, ismereteit William Edward Parry sarki
          expedíciójának beszámolóiból és a drezdai Elba folyón tanulmányozott
          jégdarabokból merítette. A festmény az ember és a természet közötti
          konfliktust ábrázolja, miszerint az ember sosem győzheti le az
          erőszakos természetet. A mű nagy hatással volt a későbbi sarki témájú
          festményekre és az &quot;északi szublime&quot; fogalmának
          kialakulására.
        </p> */}
      </div>
    </main>
  );
}
