import { useMemo, useState } from "react";

type IMapFor = "location" | "parking" | "accommodation";

interface IScheduleMaps {
      locationCode: string | null;
      accommodationCode: string | null;
      parkingCode: string | null;
}
function ScheduleMaps({ locationCode, parkingCode, accommodationCode }: IScheduleMaps) {
      const [mapFor, setMapFor] = useState<IMapFor>("location");

      const selectMapForHandler = (mapFor: IMapFor) => () => {
            setMapFor(mapFor);
      };

      const gateMapParam = useMemo(() => {
            switch (mapFor) {
                  case "location":
                        return locationCode;
                  case "parking":
                        return parkingCode;
                  case "accommodation":
                        return accommodationCode;
            }
      }, [mapFor]);

      return (
            <div className="text-sm leading-relaxed font-semibold flex flex-col gap-2">
                  <section className="flex items-end gap-0 [&>button]:border-b-2 [&>button]:border-mute-1 [&>button]:px-2 w-full">
                        <button
                              type="button"
                              onClick={selectMapForHandler("location")}
                              className={mapFor === "location" ? " text-primary !border-primary" : ""}
                        >
                              Location
                        </button>
                        <button
                              type="button"
                              onClick={selectMapForHandler("parking")}
                              className={mapFor === "parking" ? " text-primary !border-primary" : ""}
                        >
                              Parking
                        </button>
                        <button
                              type="button"
                              onClick={selectMapForHandler("accommodation")}
                              className={mapFor === "accommodation" ? " text-primary !border-primary" : ""}
                        >
                              Accommodation
                        </button>
                        <hr className="border border-mute-1 w-full" />
                  </section>

                  <iframe
                        width={350}
                        height={300}
                        src={`https://www.google.com/maps?q=${gateMapParam}&output=embed`}
                  ></iframe>
            </div>
      );
}

export default ScheduleMaps;
