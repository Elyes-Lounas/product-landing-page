import Accordion from "react-bootstrap/Accordion";
import { FaStar, FaStarHalf } from "react-icons/fa";

function ProductDesc() {
  return (
    <Accordion defaultActiveKey="0" className="my-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header>وصف المنتج</Accordion.Header>
        <Accordion.Body>
          حذاء رياضي مثالي يتميز بتصميم عصري ووظائف تقنية متقدمة لتحقيق الأداء
          الأمثل في الرياضة. يتميز بجزء علوي مصنوع من مواد خفيفة الوزن ومسامية
          لتوفير التهوية والراحة أثناء الحركة. توفر تقنية الوسادة في النعل
          الأوسط دعمًا ممتازًا وتوسيدًا للقدم لتقليل الضغط والصدمات أثناء
          التمارين الشديدة. يتميز النعل الخارجي بنمط ممتاز يوفر ثباتًا وتوازنًا
          على مختلف الأسطح، مما يضمن استقرارًا مثاليًا أثناء الحركة السريعة
          والدورانات. تتميز النعل الخارجي أيضًا بمادة متينة ومقاومة للانزلاق
          لزيادة الثبات والتحكم. يوفر الحذاء تصميمًا مريحًا يتناسب مع شكل القدم
          مع توفير الدعم اللازم لأماكن الضغط الرئيسية. كما أنه متوفر بمجموعة
          متنوعة من الألوان والتصاميم لتناسب أذواق واحتياجات مختلفة .<br/> باختصار،
          هذا الحذاء الرياضي هو خيار مثالي للأفراد الذين يسعون لتحقيق أداء متميز
          وراحة فائقة أثناء ممارسة الرياضة.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>تقييمات</Accordion.Header>
        <Accordion.Body>
        <div className="text-warning">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ProductDesc;
