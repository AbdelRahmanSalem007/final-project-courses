import './PrivacyPolicy.scss'
import {AiOutlineSwapLeft}  from 'react-icons/ai'

const PrivacyPolicy = () =>{

    return (
    <section className="PrivacyPolicy">
      <div className="container">
      <h2 className='PrivacyPolicy_header text-center'>  سياسة الخصوصية </h2>
      
     <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>

      <p>نرجو من المستخدمين الكرام الالتزام بالشروط التالية وفهمها جيداً. إن لم تكن موافقاً على أي من الشروط التالية، نرجو ألا تستخدم موقع أماناتكم وألا تنشئ حساباً به. باستخدامك لموقع أماناتكم أنت تقر على موافقتك الكاملة على هذه الشروط.</p>
       
       <hr />


       <div className='PrivacyPolicy_item mb-4'>
        <p> <AiOutlineSwapLeft className='PrivacyPolicy_item_icon' /> <b>ما هي المعلومات التي نجمعها</b> </p>
           <p className='mt-1'> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق </p>
       </div>

       <div className='PrivacyPolicy_item mb-4'>
           <p> <AiOutlineSwapLeft className='PrivacyPolicy_item_icon'/> <b>ما هي المعلومات التي نجمعها</b> </p>
           <p className='mt-1'> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق </p>
       </div>


       </div>
    </section>
    )
}

export default PrivacyPolicy;