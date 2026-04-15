import { useState } from "react";

function Cards() {
  var [state, setState] = useState([
    {
      image:
        "https://thumbs.dreamstime.com/b/young-professional-leader-asian-business-woman-wearing-suit-vertical-portrait-smiling-successful-female-executive-manager-254252812.jpg",
      name: "Lisa",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/professional-indian-female-headshots-business-corporate-women_203363-204.jpg?w=2000",
      name: "Mayuri",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small_2x/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
      name: "Merry",
    },
    {
      image:
        "https://as1.ftcdn.net/v2/jpg/02/80/95/94/1000_F_280959443_NouVlCu0KEb3ib1EtjkVobh3r4WSY7Gl.jpg",
      name: "Alley",
    },
  ]);

  return (
    <div id="cards">
      {state.map(function (user) {
        return (
          <div className="card">
            <img src={user.image} width={"100%"} height={230} alt="" />
            <h3>{user.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
