import "./App.css";
import { AddColor } from "./AddColor";
import { Counter } from "./Counter";
import { Msg } from "./Msg";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
// console.log(double(1000));

const INTIAL_MOVIE_LIST = [
  {
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
  },
  {
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
  },
  {
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
  },
  {
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8
  },
  {
    name: "The Avengers",
    rating: 6,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
  },
  {
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
  },
  {
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
  },
  {
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
  }
];


//component definition
export default function App() {
 
  //DRY code - rule -Dont repear yourself- we can do it better - code smell

  //array of data
  const people = ["Gowtham", "Kaviya", "Somu"];

  // const movieList = INTIAL_MOVIE_LIST;

  //JSX start
  return (
    <div className="App">
      {/* <Counter />
      <Counter />
      <Counter />
      <Counter /> */}

      {/* {user.map((user) => (
        <Msg name={user.name} pic={user.pic} />
      ))} */}
      {/* <Msg
        name="Prasanth"
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhClef-SAoTYs4O2UdSSwHiqVqORDOvAqWQ&usqp=CAU"
      />
      <Msg
        name="Karthik"
        pic="data:image/jpeg;base64,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"
      />
      <Msg
        name="Rajkumar"
        pic="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAABZVBMVEUAAAABt/8AAAMAtv8Auf8AAQAAuv8AAQYDAAABAQgDt/0BAw0AADABAw8Etv4AAwoABRcAACIAAD4AACsAADsAABcAADIAAB0BABMAAE0ABRsAADcDACUAACwAABIBByMABR0AAEEPrvwAAEYAAFIAACADAEsIGE8BAFkCBmcBFnIELoMFPpAERJoAJH0GSKQNZb8NfdUJlegJofIFOY4BGWsCFXUKc88Mrf8Kar0FQ6QMdcQBIYILZ8YKovYJkeAMVaMADV8FOZQJSJQGLXoHPYUKb64HTIcNg80QoekGO4YGLGYWYpoGMmYHXZsBI00DEzQBKksKRGwQj8sTfbIAGlwRpusPR3IJTKILZa4GiOAVVJwDJmUWfOYEIU0EGl8FMV0VW4kJO1UTjcMINVwWaJUEGjARh8cNj+0FXs4HP3MNVIYGMWwEo/8AXNwGKVcDLJ0Ilv8CM7YRfPkATNcQT8IHTdGishaKAAAN7klEQVR4nO1dC1sTxxqe7MzO3jLJhpCLuWyWAOIRa4WUCnhBKyBRQRRIa7WirS2VttbT0/r7z3yzCZfsLruePh7KMK+PiCHkybzP+33z3WaCkIKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCwonQTvsNnAVoGvyFr8E/OqdNERcBzo3gygCaDIP/g+BL8KjCAQIxCWIMgCVgCMaCH532O/wHIZCSYTkO8zzPdd0S/+MyxhwnzznThMwUACAex3IYc/1WodAoNsvlbLbZbBRaFZ9T5uQdy1DWiALvlHeY6/qFZn3swqV/XZ6+8hngyvTlSxfG6uVipcb5Eiapn/bbPUWAVrh3YtVaqzFy4dLVz6/NzHbmsZ0hhFCC253ZmWtfzF0YKbZqrudY1rk1ReG3NSPvua1WeeLLxeuz85RSQuyMzf9yumxOGKWZ9uzC9KWRpt8X12m/7dMBjw8Mh9Ua2fEvF2c4T8AQ5wdElcE4A7A5cTZnrHPji4l6ww+0ddrv+/8L4Xc4VZbnNcoXbt66TYAobnt2Zgg4YIxQvHTnbr1R8xztvAWoEDNZhlPzy5euXm9zQ8PDJA3BznBxLdytF1yPK+s8+XgRADhVv3jx6gym4MpDggqzhW06vzBRbnnM6mdC5wI8TOCbX2vk8vV5mgHvlMiUsERuip0r401fhFvnhSy+/bFKc/yr29z6UgOkZxO8NldvuezckKVZedYavbSQIemZGhgiofP3RgqlvHUO4ngRU7FSa+TqbLJHj9BWjkcUNyYaXFmG9BsiUOW4rfHP5il3QB9LFuawbTo716w5jvRkQZrsNiauYQIOKHn7CyuL80s7y/WKp8me8vCkxm1cuIUJzhwPPfsSIwSLYN2GRAe+GdYV/wHO0fmVcsuRO3YAX+UWJ66TiP2P53/iKw/feYaTg9QGHoHwK+LJ7ZV6ixnyFgL5qgwwwBkajhUwRFkgJp4REnu+Tdur99e6nC0caahcl/fqLrMsSX2WcOtscuw6zeRCrgp2OApSAneUefDw0XoBWYVHOcx5jSarvdIoObKWaaBW5RXG7/A82Q4tnxCa6y5tPG40NjefPKmayOSaMVGl8XSLRJHF5YeXi25e1rIDROsj34Bbzxy1LPiO0N72E4aQCc/jROmaDnUIDf7zZrtNweFzt3XoufgLkPZOIyBLulyaJ4FOrXy1HUr/KCakvVHsPwe6N6J/ExQDhY093qOUgEsb0mJ3tCISafm4siy3eAmi9SGTwjbtvUSmaQUtrgMEv8VFo5vo6zUeuJIhsmx6I1tjEnos7qxY4eIMJDbD+qCdKf7joPweWrfef/BZ2Mfxl1ppuI58LkuzHDf7TUbUVoaouj2NdA31re7orwT/44ZoGmZ9iYaiB0I7FyueJRtX3FGzxt3bEGoeWbEN9c7uCx+d3F7mHsls3gkVBG1q02flmiWVEYomoFMZuUFzQ6vNUfLt8xJCw5IK4+E9THIh707wiwLTZLJCzgM49un2cKTE3XX3u2cuSlGLenIPIoehX8cZulYvMZmUxZdiOa2Rb2nIP9t0404ZJUZIQMWV2xEVHJ5E/lpwLZlyaK4rt7mMw8Kg26hkcs9+8lKFkTW7uZAqucOjS3U/L0/BASJK5o/eIMdlxf08vcEspCWvFH5udoeZ7jO23PAkCt412ATn5ulxIyKYdB/yGDQFV2CEL3F0Ek3XyiLGkoYr5tavUYKPFo2hnLfwEmlpdMWfZT2n0SVngncnPXm8u2Z5rYlOqBRF2zs/Ic1MjheAK9YJx6KCckxXm64jj8MyvOwVWOhRj0O59UBBIdXkCyeim4nsTts8hR7zmSQ1P103HH9khg6XFzLtb5xkQfVnSRFaoyS6oUjoyqSnJe2lZwUG8+92hkWBeTKXHIMecrUxTPbgdQhZE3UsKbjSHK9whYSqxvT2VLKrOuRqnUbaIHeCtDNacuQwQmielmdC3QhO3tcosdN+OM9d6EbGDNAYE0mhFFRxrvyLnZCr4SH3UzOxZ3XAlY4eRRqhDcNGz3k4KkNpBnqChd12uKJC6C/JdnOkSroZ29Gna0U5HJZmGF7jXihthtLVKkqcaDzkSmPduLka0h2tOXJw5bjNBYqHVYEzZCudbx+QtRQ3rWW3dytMhmgU3FX224hlYtorJR7lOsKVtxTt3MEIf/U9SXTlj8yGzcfGJLeJUpU0A/WNtWPHauj9ggQpoRj359tgxDw2z05eISvN9Eagq9fhUuEBVxsFdvYLflA+ZpNz7fCoMSYZvhEaaSY/BVfm9ySeKx65y8AV9AWXcXiZmNh020RpzrsJWZmoN9zaOORqqVg6+2MgYjx08gENzzvaMMRQ0FLrSkNP4317J+tLwBUXDqtciVklvW+msZxBNPoDtUNDDQKkW66d/WCUc2VxrmIORtBu1kyxEwZMGeZmxDBSoNFOVoLAXXA1uYztyAHtHF019TStCXEWWkc/0lArqK8rSbji6eA0hmHGqEXiKdNIV5gxkLDCyEIy6Rbds5/kCF0V5mK5omsw65CGK/5KmlntRRohcCXByUIoyVQm2pHTxFDTzOxDKzV5maI1ZpjbNOp1bDm4gmEif7wTHUfaFNPupmmkqmlytky0FZk/292CHFzxfHB0NlRC7hsPtukeMlOsUoPxPshzIl9mr+RJcRTacGpQZ4guAPM8kb5OVyrnGWGP2pH7IF2rSsKV5TZnaGR3j/DQklC8aVqJrwLa26Ix8qSrnhRzo5phuIU70XGRAKaPokdFD1+inxD+EFfsoxueFI0cqCFXlk86/Ua6vnlijBXEDBrajuOKPKzmZeAKglHo45xw/o2+SeYKdLUVU3AnvWJVjtOEhub45bX4k812jnv3RBs0zXhZ0b0q9Lwk4AqG+hoL8Q6LZOj2yROjgejMV5FhKOa7w0aVWTJsgwgF1b6TdLWVzBWPQ59G68q2yXo1L0XIII5MVHbn440Q014KXZnfRw6rYRuTbtOzdGm4cstLMWMuQhm9SrKu0I+RvQmby5JH7ZYMnl3cHcOjhmexGyGxCd5MoaufclHS5OEs2S85spwHgFJD9UX0YVxYLW1/V4yThd5/haA3MbC7o7riJlhk+TPfxOkD+l5ecSnuPgZsd+pOrAkNbh01TKdHIriCBMdnkqiq3yP0nsc6LLpkmHGyCB7WdQTh1UCYx3RF8FRVimRQABIUx7vYpplIYWF6I+nkhGnWnvLEObDBoSkS7tkdRxKmAhPKe95C+EiqAKH30cnb2JPXP/TgKj8SxZW97jhyxAsB4EhcdSxqqAEWS9cjmYI66E8/bm917aP3DsCVMoNvecSfsZeqkp22BO9eeR5d8KO3s3G/xH3UcMkKH5EVhnhjn8njrfrQHJZdihxIwLd8FGNEZo8cPxCOjxkgN2q6Z3lnvzt/FHC9uMWqO+1wNIkJ3Y92VvBgD67QPEbVkLPKPbYc2S4sgnjUmXxGM0PREU/nfi5GRww8TmC5o8/GeIgrO0NfO9JZoNgLWXV0lvIoC4u7mXIwKYMpfnuZxenK3ISbig6ywGGqMpAJMhl6XUMQwXtpGYsrKcSiedaLaebaSHAxSsRviBbXoHODcUhWmPbKVbmcVQBI2FiJrYmxIFiyjXM50r6VRVbMuSMN5b2nnE5OaBRT8ArrVSZXvNAHnOTNV192hRVi4dXJb4vlwacnhKFrzERvcnABVDRXdIOJiVoJ2dJ0w3LYelAtAGHZP0+XTMuK69CbRt7S0RtxohwPO3Y4WbJXkS+0OgDMjlr7cGoJrt1rf3e1apwwLwqhACfyTZvkcM4O+SraLVclvEtmAEh1mPYLJnCl9vzbuyXBRjxXzNLzbvnXNidKkHXUV9FulklMlfBZeVZd6fD87rd3X/qOYVhG/Hy7brkMsamv3nIzxMfnt2za/l3CyOo4NN3x6jd/Jr+9ez/KHXNwMVjck3Wr1tLM5vQ1vmcOufXeS5aX/uNN+Gbolz//97s/dgsMPs/lhLPhcOdCa5NVrfF2v/Al7o+G6w67L62zP/OYCGj07f/nz/dzTYi4jQSPo5l+tlhfP7w30oaMma42oCEoPVXIQitv/7g81nDFZyslrFc3TH93vDtIuSHdIbS3X/LysiXMETB1tPLX5dFsxXNSJXKa2Srs8dA9sEGSydl0a5QxuGZbkktR4qGjF3+NFXxm6HyxKVYr6n32oKCKOWkbBUhsjDTnw846Nqez8EE3KdM4DTloFbjC4gYnQu39UlWqu8FOQrOBzI/wNRZ6XFqCy7dFqJ7ZyjrMOS9Uua2PvHzJ++z3F23xETkEb73yWN7Skg+lyAFP082PIqv5drH8jNo8Uth75Vl5LdgRzgVXH62IwuK7z++2SXf1sQl+Ltj90uwK5xDWzod3yxv3C8gJPhbnXCjqf0Vx8c+/phosSIhO+838o6Gh2u6HDw9aWvI1PeceOspPzn1YfAndVsVVAkytVrr5fll8r5+P/e9vwPWzizcfK1mlgeVbO+93aqlOzp17OJ42PbcZ13JVOAqHWY2rO63TfhtnAq5vOFNzU9JcefwpYfmGVdrd2VS7YArw5MYszO0oqlIAbrKwpuaKymUlAm7M1DR3Z/nBab+TMwAdJiGQ2yrkTWnuaf9k0MTHKDi+d9pv5J+P/tFwzfFlGvr/JBgco+eRVsxoqcIAQTNQlNnjz4Mp9HFQOpZ+huFvQ1NcpcZh+ViS0/KfEIe6SvdJHucaB2Sp2mgyFEcfAcWVgoKCgoKCgoKCgoKCgsIZwH8B/HgSpCDuosEAAAAASUVORK5CYII="
      /> */}
      {/* <Welcome name={people[0]}/> */}
      {/* {people.map((personName) => (
        <Welcome name={personName} />
      ))} */}
      {/* <AddColor /> */}

      <nav>
        <ul>
          <li>
            <Link  to="/">Home</Link >
          </li>
          <li>
            <Link  to="/movie">MovieList</Link >
          </li>
          <li>
            <Link  to="/color-game">AddColor</Link >
          </li>
          <li>
            <Link  to="/somewhere">some where</Link >
          </li>
        </ul>
      </nav>
   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieList />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/users" element={<UserList />} />
      </Routes>


    </div>
  );
  //JSX ends
}


function UserList(){
  const user = [
    {
      name: "Prasanth",
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhClef-SAoTYs4O2UdSSwHiqVqORDOvAqWQ&usqp=CAU"
    },
    {
      name: "Karthik",
      pic:
        "data:image/jpeg;base64,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"
    },
    {
      name: "Kaviya",
      pic:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAMFBMVEXk5ueutLenrrHn6eqrsbXEyMq3vL+8wcPd4OHKztDS1dfW2dvZ3N2zubzO0tTh4+QlGzZQAAAC3UlEQVR4nO2a3ZLbIAyFDeLPxpj3f9vFJE3SNMaSI9mzHb7pTC/24pwRkgKSh6HT6XQ6nU6n0+l0fjEAQw4hlP/hCvU8WZdUISU/zvlcDzBEr7RRfzA62XCiBViUVm8Y7c+yAFGZd/mK9ucchP0sv0ZBTfIOstvUXy2M4vqppV+OwcrGIDTVawy8pIOcdg0oIxgDaJ7/w8Ei5QBGjH5xEIT0Z5x+ac4yBgaH1C/FKHEIsGADUMgSBvDyMiGYCAFQht8AoDOgGuAvxfzPD3ATz62P7QEP2NPQ0/Q19w9zpukrxf2LEGgpoJTj1R8mqoHEmwTkHFSK9xcJti+CG5iZ1wCxCIqB2A38ZwYuT8Kry/DyRjQEagQc94UA8SR5hf15Qi0D5iIg3olX+O/FF1/JyhmQbsWR/1ocSWcg8C4AQh3IvM0oIRB5oOOzwAjNqrDdUGxKAwuyFIUGFNhD0PO1QyK5EdFKe0xZ9UUqEO9AC+uvedDKRKkC/MvBsjEsL/LulIk9hM/FYJT4pPphITrz7sGYc3cmwSr9MGGMdstw8uYKICzWu5Sc83Yarlicwbquq//OVq+yOU7LaCvjMsVwlo8iMpfQJ6NLCrygtXJ2jFnUBECO1q1yG21g/YudgoyJoj55tdmDXlwotwT2kiiB9/viz5bEXJUwjIn4OOXsS6XpaPLjvO5yWW4mkC0+9m8WFIeF8aj8zYP97o0I886iFBGFb25o9MnQJwvu6E4dAmpPue/g4E4dIof6zcKRccmBuVjDAf2txHL8Lw6oy1Rm/ZqKl+qvDij6nOf/dIDOA4jUsSjOAboWyFNRrANsPyAtaUmgBgciCXAD1w72P5T5wgHiEGgDSTL7BqQy8Mb++EI4AIgQiLSAJ3tbdcESuLM3RpfrAXd2vnKSTcFqoHlHBPJyjE6zGYEV129/50X7VucgrSTAfC/4Na2dbjBanql1BnXQIkxTv9PpdDrn8wMXiyCFrba+vwAAAABJRU5ErkJggg=="
    },
    {
      name: "Hello",
      pic:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAMFBMVEXk5ueutLenrrHn6eqrsbXEyMq3vL+8wcPd4OHKztDS1dfW2dvZ3N2zubzO0tTh4+QlGzZQAAAC3UlEQVR4nO2a3ZLbIAyFDeLPxpj3f9vFJE3SNMaSI9mzHb7pTC/24pwRkgKSh6HT6XQ6nU6n0+l0fjEAQw4hlP/hCvU8WZdUISU/zvlcDzBEr7RRfzA62XCiBViUVm8Y7c+yAFGZd/mK9ucchP0sv0ZBTfIOstvUXy2M4vqppV+OwcrGIDTVawy8pIOcdg0oIxgDaJ7/w8Ei5QBGjH5xEIT0Z5x+ac4yBgaH1C/FKHEIsGADUMgSBvDyMiGYCAFQht8AoDOgGuAvxfzPD3ATz62P7QEP2NPQ0/Q19w9zpukrxf2LEGgpoJTj1R8mqoHEmwTkHFSK9xcJti+CG5iZ1wCxCIqB2A38ZwYuT8Kry/DyRjQEagQc94UA8SR5hf15Qi0D5iIg3olX+O/FF1/JyhmQbsWR/1ocSWcg8C4AQh3IvM0oIRB5oOOzwAjNqrDdUGxKAwuyFIUGFNhD0PO1QyK5EdFKe0xZ9UUqEO9AC+uvedDKRKkC/MvBsjEsL/LulIk9hM/FYJT4pPphITrz7sGYc3cmwSr9MGGMdstw8uYKICzWu5Sc83Yarlicwbquq//OVq+yOU7LaCvjMsVwlo8iMpfQJ6NLCrygtXJ2jFnUBECO1q1yG21g/YudgoyJoj55tdmDXlwotwT2kiiB9/viz5bEXJUwjIn4OOXsS6XpaPLjvO5yWW4mkC0+9m8WFIeF8aj8zYP97o0I886iFBGFb25o9MnQJwvu6E4dAmpPue/g4E4dIof6zcKRccmBuVjDAf2txHL8Lw6oy1Rm/ZqKl+qvDij6nOf/dIDOA4jUsSjOAboWyFNRrANsPyAtaUmgBgciCXAD1w72P5T5wgHiEGgDSTL7BqQy8Mb++EI4AIgQiLSAJ3tbdcESuLM3RpfrAXd2vnKSTcFqoHlHBPJyjE6zGYEV129/50X7VucgrSTAfC/4Na2dbjBanql1BnXQIkxTv9PpdDrn8wMXiyCFrba+vwAAAABJRU5ErkJggg=="
    }
  ];

  return(
    <div>
      {user.map((user) => (
        <Msg name={user.name} pic={user.pic} />
      ))} 
    </div>
  )
}
    //Why index - unique value to key

function Home(){
  return(
    <h1>Welcome to the Movie app 😊🎇🎇✨🎉🎉</h1>
  )
}

function MovieList(){
  const movieList = INTIAL_MOVIE_LIST;
  return(
    <div className="movie-list">
    {movieList.map((mv, index) => (
        <Movie key={index} movie={mv}/> 
    ))}
    
    </div>
  )
}

function Movie({ movie }) {
  // const movie = {
  //   name: "The Avengers",
  //   rating: 8,
  //   summary:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
  //   poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
  // };

  const [show, setShow] = useState(true)

  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
    fontWeight: "bold",
   
  };
 // block = true
 // none -false
//show = !true -> false

 //conditional styling
  // const summaryStyle = {
  //   display: show ? "block" : "none",
  // }
  
 //conditional rendering
  return(
    <div className="movie-container">
    <img className="movie-poster" src={movie.poster} alt={movie.name}/>
    <div className="movie-spec">
    <h2 className="movie-name">{movie.name}</h2> 
    <p style= {styles} className="movie-rating">
⭐ {movie.rating}</p>
      </div>
      <button className="toggle-style" onClick={() => setShow(!show) }>Toggle description</button>
    {/* <p style= {summaryStyle} className="movie-summary">{movie.summary}</p> */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null} 
    <Counter />
    </div>
  )
}