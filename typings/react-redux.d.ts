import "react-redux";

declare module "react-redux" {
  // To enable usage of decorator
  // https://github.com/reactjs/react-redux/pull/541#issuecomment-269197189
  export function connect(
    mapStateToProps?: MapStateToProps<any, any> | MapStateToPropsFactory<any, any>,
    mapDispatchToProps?: MapDispatchToProps<any, any> | MapDispatchToPropsFactory<any, any>,
    mergeProps?: MergeProps<any, any, any>,
    options?: Options
  ): ClassDecorator;
}