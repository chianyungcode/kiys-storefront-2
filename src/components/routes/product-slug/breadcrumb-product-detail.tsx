import { Link, useLocation, useParams } from "@tanstack/react-router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { capitalizationFirstLetter } from "@/utils/string-format";

interface BreadcrumbProductDetails {
  productName: string;
}
const BreadcrumbProductDetails = ({
  productName,
}: BreadcrumbProductDetails) => {
  const params = useParams({ from: "/_layout/products/$productSlug" });
  const { pathname } = useLocation();
  const splittedPathname = pathname.split("/").slice(1, 3);

  const isParamsActive =
    params.productSlug === splittedPathname[1]
      ? "font-bold text-black"
      : "font-base";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={`/${splittedPathname[0]}`}>
              {capitalizationFirstLetter(splittedPathname[0])}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              to={`/${splittedPathname[0]}/${splittedPathname[1]}`}
              className={isParamsActive}
            >
              {productName}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbProductDetails;
