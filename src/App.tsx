import { RemoteAppProps } from "./types";

const App = ({ data, onDataUpdate }: RemoteAppProps) => {
  // Используем полученные данные
  console.log("Received data in remote:", data);
  // Пример обновления данных
  const handleUpdate = () => {
    onDataUpdate?.("Изменил текст");
  };

  return (
    <div>
      <h1>Remote APP (Slave)</h1>
      <h2 className="h2">
        Changed style when using toggle (changing theme in REMOTE)
      </h2>
      <button onClick={handleUpdate} className="button">
        Update Data
      </button>
    </div>
  );
};

export default App;
