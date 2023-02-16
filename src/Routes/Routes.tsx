import React from "react";

const FamilyManagement = React.lazy(() =>
  import("../Container/FamilyManagement/FamilyList").then(({ FamilyList }) => ({
    default: FamilyList,
  }))
);

const AddFamily = React.lazy(() =>
  import("../Container/FamilyManagement/AddFamily").then(({ AddFamily }) => ({
    default: AddFamily,
  }))
);

const UpdateFamily = React.lazy(() =>
  import("../Container/FamilyManagement/UpdateFamily").then(
    ({ UpdateFamily }) => ({
      default: UpdateFamily,
    })
  )
);

const FamilyDetail = React.lazy(() =>
  import("../Container/FamilyManagement/FamilyDetail").then(
    ({ FamilyDetail }) => ({
      default: FamilyDetail,
    })
  )
);

const routes = [
  {
    path: "/family-management",
    exact: true,
    name: "Family Management",
    element: FamilyManagement,
  },
  { path: "/add-family", exact: true, name: "Add Family", element: AddFamily },
  {
    path: "/update-family",
    exact: true,
    name: "Update Family",
    element: UpdateFamily,
  },
  {
    path: "/family-Detail",
    exact: true,
    name: "Family Detail",
    element: FamilyDetail,
  },
];

export default routes;
