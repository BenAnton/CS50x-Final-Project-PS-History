import "./MainWindow.css";
import Card from "./Card";
import { games, consoles, controllers, Game } from "../data/data";
import pslogo from "../assets/pslogo.png";

interface MainWindowProps {
  page: string;
}

export const MainWindow = ({ page }: MainWindowProps) => {
  const renderContent = () => {
    switch (page) {
      case "games":
        return (
          <div className="main-window">
            {games.map((game: Game, index: number) => (
              <Card
                key={index}
                image={game.image}
                title={game.title}
                description={game.description}
                url={game.url}
              />
            ))}
          </div>
        );

      case "consoles":
        return (
          <div className="main-window">
            {consoles.map((console: Game, index: number) => (
              <Card
                key={index}
                image={console.image}
                title={console.title}
                description={console.description}
                url={console.url}
              />
            ))}
          </div>
        );
      case "controllers":
        return (
          <div className="main-window">
            {controllers.map((controller: Game, index: number) => (
              <Card
                key={index}
                image={controller.image}
                title={controller.title}
                description={controller.description}
                url={controller.url}
              />
            ))}
          </div>
        );
      case "home":
        return (
          <div className="main-window">
            <img className="image-main" src={pslogo} />
            <h2>My Playstation Showcase Site</h2>
          </div>
        );
    }
  };
  return <div>{renderContent()}</div>;
};

export default MainWindow;
