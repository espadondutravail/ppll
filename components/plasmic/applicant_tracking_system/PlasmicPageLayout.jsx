// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8E2qDFGZX1FNzv6rDU5dMM
// Component: uVNJ9QU5y2Nl
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot,
  useCurrentUser
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import { RichLayout } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-layout";
import { LoadingBoundary } from "@plasmicpkgs/plasmic-basic-components";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 8E2qDFGZX1FNzv6rDU5dMM/projectcss
import sty from "./PlasmicPageLayout.module.css"; // plasmic-import: uVNJ9QU5y2Nl/css
import LoadingIcon from "./icons/PlasmicIcon__Loading"; // plasmic-import: 4dFlhlrtkKif/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: NRjxYj_p_lyS/icon

createPlasmicElementProxy;

export const PlasmicPageLayout__VariantProps = new Array();

export const PlasmicPageLayout__ArgProps = new Array("children");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPageLayout__RenderFunc(props) {
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
  return (
    <RichLayout
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
      layout={"side"}
      logoElement={
        <Icon8Icon
          className={classNames(projectcss.all, sty.svg__ucqX5)}
          role={"img"}
        />
      }
      navMenuItems={(() => {
        const __composite = [
          { path: null, name: null },
          { path: null, name: null },
          { path: null, name: null }
        ];

        __composite["0"]["path"] = "/";
        __composite["0"]["name"] = "Dashboard";
        __composite["1"]["path"] = "/positions";
        __composite["1"]["name"] = "Job Postings";
        __composite["2"]["path"] = `/candidates`;
        __composite["2"]["name"] = "Candidates";
        return __composite;
      })()}
      simpleNavTheme={(() => {
        const __composite = { scheme: null };
        __composite["scheme"] = "primary";
        return __composite;
      })()}
      title={"Applicant Tracker"}
    >
      <LoadingBoundary
        data-plasmic-name={"loadingBoundary"}
        data-plasmic-override={overrides.loadingBoundary}
        className={classNames("__wab_instance", sty.loadingBoundary)}
        loadingState={
          <DataCtxReader__>
            {$ctx => (
              <div className={classNames(projectcss.all, sty.freeBox__xZCmO)}>
                <LoadingIcon
                  className={classNames(projectcss.all, sty.svg__m1NOi)}
                  role={"img"}
                />
              </div>
            )}
          </DataCtxReader__>
        }
      >
        <DataCtxReader__>
          {$ctx => (
            <div className={classNames(projectcss.all, sty.freeBox__yZjT7)}>
              {renderPlasmicSlot({
                defaultContents: (
                  <section
                    className={classNames(projectcss.all, sty.section__diFj)}
                  >
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1__tahgJ
                      )}
                    >
                      {"You won't believe what happens next."}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__d1JK
                      )}
                    >
                      {"Enter some text"}
                    </div>
                  </section>
                ),

                value: args.children
              })}
            </div>
          )}
        </DataCtxReader__>
      </LoadingBoundary>
    </RichLayout>
  );
}

const PlasmicDescendants = {
  root: ["root", "loadingBoundary"],
  loadingBoundary: ["loadingBoundary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPageLayout__ArgProps,
          internalVariantPropNames: PlasmicPageLayout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPageLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageLayout";
  } else {
    func.displayName = `PlasmicPageLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicPageLayout = Object.assign(
  // Top-level PlasmicPageLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loadingBoundary: makeNodeComponent("loadingBoundary"),
    // Metadata about props expected for PlasmicPageLayout
    internalVariantProps: PlasmicPageLayout__VariantProps,
    internalArgProps: PlasmicPageLayout__ArgProps
  }
);

export default PlasmicPageLayout;
/* prettier-ignore-end */