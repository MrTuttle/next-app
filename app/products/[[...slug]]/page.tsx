// app/products/[...slug]/page.tsx

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}
const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage slug :{slug} sortOrder:{sortOrder}
    </div>
  );
};

export default ProductPage;
