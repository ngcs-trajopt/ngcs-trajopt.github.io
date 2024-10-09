import { Suspense } from "react";
import { IframeSwitch } from "./IframeSwitch";
import { Carousel } from "./Carousel";
import { UAVOverview } from "./UAVOverview";

export function FrontPageCarousel() {
  return (
    <div className="max-w-[300mm] mx-auto font-sans leading-loose text-lg p-4 bg-gray-50 shadow-md rounded-lg mb-5">
      <Carousel
        children={[<UAVOverview />, <IiwaNGCS />, <IK />, <IiiwaMinDist />]}
      />
    </div>
  );
}

function IiwaNGCS() {
  return (
    <IframeSwitch src="meshcats/iiwa_ngcs.html" height="400px">
      <Suspense fallback={null}>
        <div className="w-[60%] flex flex-row items-center justify-center">
          <img
            src="figures/iiwa_example/iiwa_gcs_comparison.png"
            className="object-contain w-[65%] h-full max-w-[100%]"
          />
          <img
            src="figures/iiwa_example/gcs_comparison_derivative.png"
            className="object-contain w-full h-full max-w-[100%]"
          />
        </div>
      </Suspense>
    </IframeSwitch>
  );
}

function IK() {
  return (
    <IframeSwitch src="meshcats/iiwa_ik.html" height="400px">
      <div className="flex flex-row text-center justify-around items-start flex-wrap">
        <figure className="m-0 max-w-[33%]">
          <Suspense fallback={null}>
            <img
              src="figures/iiwa_example/ik_traj_start.png"
              className="flex-1 m-0"
            />
          </Suspense>
          <figcaption>(a) The robot starts in the right bin</figcaption>
        </figure>
        <figure className="my-0 mx-0.5 max-w-[33%]">
          <Suspense fallback={null}>
            <img
              src="figures/iiwa_example/ik_traj_configuration.png"
              className="flex-1 m-0"
            />
          </Suspense>
          <figcaption>(b) Planning to a goal configuration</figcaption>
        </figure>
        <figure className="m-0 max-w-[33%]">
          <Suspense fallback={null}>
            <img
              src="figures/iiwa_example/ik_traj_position.png"
              className="flex-1 m-0"
            />
          </Suspense>
          <figcaption>(c) Jointly solving for IK</figcaption>
        </figure>
      </div>
    </IframeSwitch>
  );
}

function IiiwaMinDist() {
  return (
    <IframeSwitch src="meshcats/iiwa_dist.html" height="400px">
      <Suspense fallback={null}>
        <img
          src="figures/iiwa_example/iiwa_min_distance.png"
          className="w-[40%]"
        />
      </Suspense>
    </IframeSwitch>
  );
}
