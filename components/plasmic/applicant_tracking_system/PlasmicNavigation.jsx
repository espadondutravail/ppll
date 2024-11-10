// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8E2qDFGZX1FNzv6rDU5dMM
// Component: 3Qq15DvoZHcJ
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { AntdMenu } from "@plasmicpkgs/antd5/skinny/registerMenu";
import { AntdMenuItem } from "@plasmicpkgs/antd5/skinny/registerMenu";
import { useScreenVariants as useScreenVariantsk32BBSRxE4D } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: K32bB-SRxE4d/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 8E2qDFGZX1FNzv6rDU5dMM/projectcss
import sty from "./PlasmicNavigation.module.css"; // plasmic-import: 3Qq15DvoZHcJ/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: CBjhNt-oYcZ0/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: pqJErfhISBnM/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: IoshLaGk13RA/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: hqUc1diRPLTA/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: L-VZIR0pHD7g/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: -HxVHxGcnd6L/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: VwXixAk_blwA/icon

createPlasmicElementProxy;

export const PlasmicNavigation__VariantProps = new Array();

export const PlasmicNavigation__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavigation__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsk32BBSRxE4D()
  });
  return (
    <AntdMenu
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      expandIcon={null}
      mode={
        hasVariant(globalVariants, "screen", "mobileOnly")
          ? "horizontal"
          : undefined
      }
    >
      <AntdMenuItem
        className={classNames("__wab_instance", sty.menuItem__adLkT)}
        key={"menuItemKey0"}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__aI74N
          )}
        >
          {"StarterKit"}
        </div>
      </AntdMenuItem>
      <AntdMenuItem
        className={classNames("__wab_instance", sty.menuItem__h3F)}
        key={"menuItemKey1"}
        onClick={async () => {
          const $steps = {};
          $steps["goToHomepage"] = true
            ? (() => {
                const actionArgs = {};
                return (({ destination }) => {
                  if (
                    typeof destination === "string" &&
                    destination.startsWith("#")
                  ) {
                    document
                      .getElementById(destination.substr(1))
                      .scrollIntoView({ behavior: "smooth" });
                  } else {
                    __nextRouter?.push(destination);
                  }
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["goToHomepage"] != null &&
            typeof $steps["goToHomepage"] === "object" &&
            typeof $steps["goToHomepage"].then === "function"
          ) {
            $steps["goToHomepage"] = await $steps["goToHomepage"];
          }
        }}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__eGej0)}
        >
          <IconIcon
            className={classNames(projectcss.all, sty.svg__zeUak)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__aVv9Y
            )}
          >
            {"Dashboard"}
          </div>
        </Stack__>
      </AntdMenuItem>
      <AntdMenuItem
        className={classNames("__wab_instance", sty.menuItem__zbo1I)}
        key={"menuItemKey2"}
        onClick={async () => {
          const $steps = {};
          $steps["goToJobPostings"] = true
            ? (() => {
                const actionArgs = {};
                return (({ destination }) => {
                  if (
                    typeof destination === "string" &&
                    destination.startsWith("#")
                  ) {
                    document
                      .getElementById(destination.substr(1))
                      .scrollIntoView({ behavior: "smooth" });
                  } else {
                    __nextRouter?.push(destination);
                  }
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["goToJobPostings"] != null &&
            typeof $steps["goToJobPostings"] === "object" &&
            typeof $steps["goToJobPostings"].then === "function"
          ) {
            $steps["goToJobPostings"] = await $steps["goToJobPostings"];
          }
        }}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ba4M0)}
        >
          <Icon2Icon
            className={classNames(projectcss.all, sty.svg___1KBtY)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fukzr
            )}
          >
            {"Job Postings"}
          </div>
        </Stack__>
      </AntdMenuItem>
      <AntdMenuItem
        className={classNames("__wab_instance", sty.menuItem__jOtFp)}
        key={"menuItemKey3"}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__fGhJe)}
        >
          <Icon3Icon
            className={classNames(projectcss.all, sty.svg__mv93P)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__e7HSs
            )}
          >
            {"Candidate Pipeline"}
          </div>
        </Stack__>
      </AntdMenuItem>
      <AntdMenuItem
        className={classNames("__wab_instance", sty.menuItem__eXu6Q)}
        key={"menuItemKey4"}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__fBbyn)}
        >
          <Icon4Icon
            className={classNames(projectcss.all, sty.svg__riAbg)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__anFbA
            )}
          >
            {"Interview Scheduling"}
          </div>
        </Stack__>
      </AntdMenuItem>
      <AntdMenuItem
        className={classNames("__wab_instance", sty.menuItem__s3BPe)}
        key={"menuItemKey5"}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__lQkNo)}
        >
          <Icon5Icon
            className={classNames(projectcss.all, sty.svg__wMx7P)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__g2Q9K
            )}
          >
            {"Reports"}
          </div>
        </Stack__>
      </AntdMenuItem>
      <div className={classNames(projectcss.all, sty.freeBox__dQrWp)} />
      {(() => {
        try {
          return !currentUser.isLoggedIn;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <AntdMenuItem
          className={classNames("__wab_instance", sty.menuItem__hn1ND)}
          key={"menuItemKey6"}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___9YwiE)}
          >
            <Icon6Icon
              className={classNames(projectcss.all, sty.svg__wjsm2)}
              role={"img"}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ePtys
              )}
            >
              {"Log in"}
            </div>
          </Stack__>
        </AntdMenuItem>
      ) : null}
      {(() => {
        try {
          return currentUser.isLoggedIn;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <AntdMenuItem
          className={classNames("__wab_instance", sty.menuItem__oHrk3)}
          key={"menuItemKey7"}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__yakga)}
          >
            <Icon6Icon
              className={classNames(projectcss.all, sty.svg__amFz1)}
              role={"img"}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0QT9N
              )}
            >
              {"Log out"}
            </div>
          </Stack__>
        </AntdMenuItem>
      ) : null}
      <AntdMenuItem
        className={classNames("__wab_instance", sty.menuItem__m7ZhO)}
        key={"menuItemKey8"}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__lekoq)}
        >
          <Icon6Icon
            className={classNames(projectcss.all, sty.svg__o4HWh)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fiojo
            )}
          >
            {"Messages"}
          </div>
        </Stack__>
      </AntdMenuItem>
      <AntdMenuItem
        className={classNames("__wab_instance", sty.menuItem__diY9)}
        key={"menuItemKey9"}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__fFoI3)}
        >
          <Icon7Icon
            className={classNames(projectcss.all, sty.svg__wo1Oe)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__aOPlO
            )}
          >
            {"Settings"}
          </div>
        </Stack__>
      </AntdMenuItem>
    </AntdMenu>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavigation__ArgProps,
          internalVariantPropNames: PlasmicNavigation__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavigation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavigation";
  } else {
    func.displayName = `PlasmicNavigation.${nodeName}`;
  }
  return func;
}

export const PlasmicNavigation = Object.assign(
  // Top-level PlasmicNavigation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicNavigation
    internalVariantProps: PlasmicNavigation__VariantProps,
    internalArgProps: PlasmicNavigation__ArgProps
  }
);

export default PlasmicNavigation;
/* prettier-ignore-end */