import { Suspense } from "react";
import { IframeSwitch } from "./IframeSwitch";
import { Carousel } from "./Carousel";
import { UAVOverview } from "./UAVOverview";

export function FrontPageCarousel() {
  return (
    <div className="max-w-[300mm] mx-auto font-sans leading-loose text-lg p-4 bg-white shadow-md rounded-lg mb-5">
      <Carousel
        children={[
          <UAVWithCaption />,
          <TwoDComparison />,
          <IiwaNGCS />,
          <IK />,
          <IiiwaMinDist />,
        ]}
      />
    </div>
  );
}

function UAVWithCaption() {
  return (
    <figure>
      <UAVOverview />
      <figcaption className="text-justify text-xs mt-4">
        Fig. 1: Three candidate trajectories for a quadrotor navigating from the
        bottom left corner to the top right room of a building. The blue
        trajectory (convex GCS trajectory optimization) is fast but lacks
        smoothness and exhibits unrealistic roll due to high initial
        accelerations. The yellow and red trajectories (proposed method) enforce
        higher-order continuity, limit accelerations, and achieve smoother paths
        while the yellow trajectory also minimizes snap.
      </figcaption>
    </figure>
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
          <figcaption className="text-center text-sm mt-[-20px]">
            (a) Convex GCS
          </figcaption>
        </figure>
        <figure className="flex-1 m-0.5 text-center">
          <img
            src="figures/two_dimensional_example/gcs_toppra.gif"
            className="w-full h-auto"
          />
          <figcaption className="text-center text-sm mt-[-20px]">
            (b) GCS + TOPP
          </figcaption>
        </figure>
        <figure className="flex-1  m-0.5 text-center">
          <img
            src="figures/two_dimensional_example/gcs_nonlinear.gif"
            className="w-full h-auto"
          />
          <figcaption className="text-center text-sm mt-[-20px]">
            (c) NGCS
          </figcaption>
        </figure>
        <figcaption className="text-justify text-xs mt-4">
          Fig. 3: 2D comparison of GCS trajectory optimization with GCS + TOPP
          and nonconvex GCS (The trajectory is blue). The blue graph in the
          velocity and acceleration plot illustrates the horizontal component in
          x and the orange plot for the vertical component in y. The left column
          shows the convex duration transcription of GCS and its corresponding
          velocities and accelerations. The middle column illustrates the same
          path, but with a reparametrization using TOPP and acceleration bounds.
          Lastly, we show our method that includes nonlinear continuity
          constraints and acceleration bounds.
        </figcaption>
      </div>
    </Suspense>
  );
}

function IiwaNGCS() {
  return (
    <IframeSwitch src="meshcats/iiwa_ngcs.html" height="400px">
      <Suspense fallback={null}>
        <div className="flex flex-col items-center justify-center">
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
          <figcaption className="text-justify text-xs mt-4">
            Fig. 4: The top image shows the Kuka robot in the environment,
            overlaid NGCS (blue) and classical GCS (orange) trajectories,
            following the end-effector position. The plots compare joint
            velocities and accelerations for both trajectories, focusing on
            joints 2 to 4. GCS violates every joint acceleration limit, whereas
            NGCS adhered to the constraints.
          </figcaption>
        </div>
      </Suspense>
    </IframeSwitch>
  );
}

function IK() {
  return (
    <IframeSwitch src="meshcats/iiwa_ik.html" height="400px">
      <div className="flex flex-col">
        <div className="flex flex-row text-center justify-around items-start">
          <figure className="m-0 w-[33%]">
            <Suspense fallback={null}>
              <img
                src="figures/iiwa_example/ik_traj_start.png"
                className="h-auto w-full"
              />
            </Suspense>
            <figcaption className="text-center text-sm">
              (a) The robot starts in the right bin
            </figcaption>
          </figure>
          <figure className="my-0 mx-0.5 w-[33%]">
            <Suspense fallback={null}>
              <img
                src="figures/iiwa_example/ik_traj_configuration.png"
                className="h-auto w-full"
              />
            </Suspense>
            <figcaption className="text-center text-sm">
              (b) Planning to a goal configuration
            </figcaption>
          </figure>
          <figure className="m-0 w-[33%]">
            <Suspense fallback={null}>
              <img
                src="figures/iiwa_example/ik_traj_position.png"
                className="h-auto w-full"
              />
            </Suspense>
            <figcaption className="text-center text-sm">
              (c) Jointly solving for IK
            </figcaption>
          </figure>
        </div>
        <figcaption className="text-justify text-xs mt-4">
          Fig. 6: The first image displays the robot initiating from the right
          bin, the middle illustrates the blue trajectory resulting from
          separately solving the inverse kinematics problem and planning to the
          configuration. The last shows the orange trajectory, achieved by
          jointly solving motion planning with a task space position constraint.
        </figcaption>
      </div>
    </IframeSwitch>
  );
}

function IiiwaMinDist() {
  return (
    <IframeSwitch src="meshcats/iiwa_dist.html" height="400px">
      <Suspense fallback={null}>
        <div className="flex flex-col items-center justify-center">
          <img
            src="figures/iiwa_example/iiwa_min_distance.png"
            className="w-[50%]"
          />
          <figcaption className="text-justify text-xs mt-4">
            Fig. 7: The Kuka arm is avoiding the middle using minimum distance
            constraints, since it hasn't been captured by the iris regions.
          </figcaption>
        </div>
      </Suspense>
    </IframeSwitch>
  );
}
