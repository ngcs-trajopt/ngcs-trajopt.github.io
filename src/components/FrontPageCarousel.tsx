import { Suspense } from "react";
import { IframeSwitch } from "./IframeSwitch";
import { Carousel } from "./Carousel";
import { UAVOverview } from "./UAVOverview";

export function FrontPageCarousel() {
  return (
    <div className="max-w-[300mm] mx-auto font-sans leading-loose text-lg p-4 bg-white shadow-md rounded-lg mb-5">
      <Carousel
        children={[
          <UAVOverview />,
          <TwoDComparison />,
          <IiwaNGCS />,
          <IK />,
          <IiiwaMinDist />,
        ]}
      />
    </div>
  );
}

function TwoDComparison() {
  return (
    <Suspense fallback={null}>
      <div className="flex flex-row justify-between items-start flex-wrap">
        <figure className="flex-1 m-0.5 text-center">
          <img
            src="figures/two_dimensional_example/gcs_classical.gif"
            className="w-full h-auto"
          />
          {/* <img
            src="figures/two_dimensional_example/classical_gcs_deriatives.png"
            className="w-full h-auto"
          /> */}
          <figcaption>(a) Convex GCS</figcaption>
        </figure>
        <figure className="flex-1 m-0.5 text-center">
          <img
            src="figures/two_dimensional_example/gcs_toppra.gif"
            className="w-full h-auto"
          />
          {/* <img
            src="figures/two_dimensional_example/toppra_gcs_derivatives.png"
            className="w-full h-auto"
          /> */}
          <figcaption>(b) GCS + TOPP</figcaption>
        </figure>
        <figure className="flex-1  m-0.5 text-center">
          <img
            src="figures/two_dimensional_example/gcs_nonlinear.gif"
            className="w-full h-auto"
          />
          {/* <img
            src="figures/two_dimensional_example/ngcs_derivatives.png"
            className="w-full h-auto"
          /> */}
          <figcaption>(c) NGCS</figcaption>
        </figure>
      </div>
    </Suspense>
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
        <figure className="m-0 w-[33%]">
          <Suspense fallback={null}>
            <img
              src="figures/iiwa_example/ik_traj_start.png"
              className="h-auto w-full"
            />
          </Suspense>
          <figcaption>(a) The robot starts in the right bin</figcaption>
        </figure>
        <figure className="my-0 mx-0.5 w-[33%]">
          <Suspense fallback={null}>
            <img
              src="figures/iiwa_example/ik_traj_configuration.png"
              className="h-auto w-full"
            />
          </Suspense>
          <figcaption>(b) Planning to a goal configuration</figcaption>
        </figure>
        <figure className="m-0 w-[33%]">
          <Suspense fallback={null}>
            <img
              src="figures/iiwa_example/ik_traj_position.png"
              className="h-auto w-full"
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
