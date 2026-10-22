// Kho câu hỏi ngữ pháp dùng chung cho chế độ ONLINE (server Node.js + trình duyệt).
// File này dùng UMD pattern để vừa require() được trong Node, vừa <script> được trên trình duyệt.
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.LESSON_DATABASE = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  return {
    directions: {
      title: "Lesson 12.2: Directions",
      grammar: [
        { q: "________ left at the next traffic light!", options: ["Turn", "Turning", "To turn"], ans: 0, hint: "Mệnh lệnh bắt đầu bằng động từ nguyên thể." },
        { q: "The cinema is ________ to the bookstore.", options: ["between", "next", "opposite"], ans: 1, hint: "Next đi với to." },
        { q: "Please ________ the street carefully.", options: ["cross", "crossed", "crossing"], ans: 0, hint: "Sau please dùng V nguyên thể." },
        { q: "The bank is ________ the bakery and the park.", options: ["next", "between", "opposite"], ans: 1, hint: "Between ... and ... (ở giữa hai nơi)." },
        { q: "Don't ________ left here! It is a one-way street.", options: ["turn", "turned", "turning"], ans: 0, hint: "Don't + V nguyên thể." },
        { q: "How can I ________ to the supermarket from here?", options: ["get", "got", "getting"], ans: 0, hint: "Can + S + V nguyên thể." },
        { q: "Where ________ the nearest pharmacy?", options: ["is", "are", "were"], ans: 0, hint: "Pharmacy số ít dùng is." },
        { q: "It takes about 5 minutes ________ foot.", options: ["by", "on", "in"], ans: 1, hint: "Đi bộ là on foot." },
        { q: "Go straight ahead until you ________ the hospital.", options: ["see", "saw", "seeing"], ans: 0, hint: "Mệnh lệnh chỉ đường dùng hiện tại đơn." },
        { q: "You ________ miss it! It has a huge blue sign.", options: ["can't", "mustn't", "don't"], ans: 0, hint: "You can't miss it (bạn không thể bỏ lỡ đâu)." }
      ]
    },

    travel: {
      title: "Lesson 13: Travel & Holidays",
      grammar: [
        { q: "Look at the dark clouds! It ________ soon.", options: ["is going to rain", "rains", "rained"], ans: 0, hint: "Dự đoán có bằng chứng trước mắt dùng Be going to." },
        { q: "Last summer, we ________ to Da Nang by plane.", options: ["went", "go", "going"], ans: 0, hint: "Quá khứ 'Last summer' dùng V2: went." },
        { q: "Why don't we ________ a motorbike to explore?", options: ["rent", "renting", "to rent"], ans: 0, hint: "Sau Why don't we dùng V nguyên thể." },
        { q: "How about ________ local seafood tonight?", options: ["taste", "tasting", "to taste"], ans: 1, hint: "How about đi với V-ing." },
        { q: "I ________ buy any souvenirs yesterday because they were pricey.", options: ["didn't", "wasn't", "don't"], ans: 0, hint: "Phủ định quá khứ động từ thường dùng didn't." },
        { q: "Next week, the weather is going to ________ very hot.", options: ["be", "is", "being"], ans: 0, hint: "Sau going to phải có be nguyên thể trước tính từ." },
        { q: "Did you ________ a lot of photos on the island?", options: ["take", "took", "taken"], ans: 0, hint: "Đã có Did thì động từ đưa về nguyên thể." },
        { q: "We ________ at a very cozy homestay near the lake.", options: ["stayed", "stay", "staying"], ans: 0, hint: "Kể về chuyến đi đã qua dùng V-ed." },
        { q: "I would like ________ a room for 3 nights.", options: ["book", "to book", "booking"], ans: 1, hint: "Would like + to V." },
        { q: "Let's ________ a taxi to the beach!", options: ["take", "taking", "took"], ans: 0, hint: "Let's + V nguyên thể." }
      ]
    },

    hotel: {
      title: "Lesson 14: Hotel & Accommodation",
      grammar: [
        { q: "Could you please ________ someone to check the air conditioner?", options: ["send", "sending", "to send"], ans: 0, hint: "Sau 'Could you please' dùng động từ nguyên mẫu không 'to'." },
        { q: "I have a reservation ________ the name Linh Nguyen.", options: ["under", "at", "on"], ans: 0, hint: "Cụm từ chuẩn: reservation UNDER the name of..." },
        { q: "There ________ no hot water in my shower this morning.", options: ["was", "is", "were"], ans: 0, hint: "Nước nóng (water) là danh từ không đếm được, mốc 'this morning' dùng was." },
        { q: "The air conditioner in my room ________ work.", options: ["doesn't", "isn't", "don't"], ans: 0, hint: "Work là động từ hành động, ngôi số ít phủ định dùng doesn't." },
        { q: "Can I ________ two extra towels and a hairdryer, please?", options: ["have", "having", "had"], ans: 0, hint: "Mẫu câu yêu cầu đồ lịch sự: Can I have + [đồ vật]?" },
        { q: "There ________ no towels in the bathroom.", options: ["are", "is", "was"], ans: 0, hint: "Towels là danh từ số nhiều, đi với There are no." },
        { q: "We would like ________ out now.", options: ["to check", "check", "checking"], ans: 0, hint: "Cấu trúc: Would like + TO V." },
        { q: "Is breakfast ________ in the room price?", options: ["included", "include", "including"], ans: 0, hint: "Câu hỏi bị động: Is breakfast included...?" },
        { q: "Could we ________ out one hour late?", options: ["check", "to check", "checking"], ans: 0, hint: "Sau Could we dùng động từ nguyên thể." },
        { q: "Where can I ________ the remote control for the TV?", options: ["find", "found", "finding"], ans: 0, hint: "Sau Can/Could dùng V nguyên thể: can I find." },
        { q: "The room next door ________ very noisy last night.", options: ["was", "is", "were"], ans: 0, hint: "Chủ ngữ số ít 'The room', mốc thời gian 'last night' dùng was." },
        { q: "Could someone ________ our room now? We are going out.", options: ["clean", "cleaned", "cleaning"], ans: 0, hint: "Could someone + V-nguyên thể: clean." },
        { q: "Can we get a room ________ a nice sea view?", options: ["with", "for", "in"], ans: 0, hint: "Phòng có tầm nhìn gì: a room WITH a view." },
        { q: "Could you please keep our luggage ________ check-in time?", options: ["before", "under", "between"], ans: 0, hint: "Trước giờ nhận phòng: before check-in time." },
        { q: "Can I pay ________ credit card or cash?", options: ["by", "with", "on"], ans: 0, hint: "Thanh toán bằng thẻ: pay by credit card." }
      ]
    },

    grammar_review: {
      title: "Grammar Review: 30 Master Questions",
      grammar: [
        { q: "I usually ________ coffee, but yesterday I drank tea.", options: ["drink", "drank", "drinking"], ans: 0, hint: "Thói quen hàng ngày dùng hiện tại đơn." },
        { q: "Please ________ left at the corner!", options: ["don't turn", "not turn", "didn't turn"], ans: 0, hint: "Mệnh lệnh phủ định dùng Don't + V." },
        { q: "Where ________ you go on holiday last summer?", options: ["did", "do", "were"], ans: 0, hint: "Quá khứ có động từ go mượn trợ động từ did." },
        { q: "She ________ spicy food.", options: ["doesn't like", "isn't like", "don't like"], ans: 0, hint: "Like là động từ thường, ngôi she dùng doesn't like." },
        { q: "________ you tired after the long journey yesterday?", options: ["Were", "Did", "Are"], ans: 0, hint: "Tired là tính từ, quá khứ số nhiều dùng Were." },
        { q: "They ________ a new car two weeks ago.", options: ["bought", "buy", "buying"], ans: 0, hint: "Ago là mốc quá khứ, V2 của buy là bought." },
        { q: "What time ________ she usually wake up?", options: ["does", "do", "is"], ans: 0, hint: "Chủ ngữ she mượn trợ động từ does." },
        { q: "We ________ at home last Sunday.", options: ["weren't", "wasn't", "didn't"], ans: 0, hint: "Chủ ngữ We ở quá khứ phủ định dùng weren't." },
        { q: "My brother ________ in a hospital every day.", options: ["works", "work", "worked"], ans: 0, hint: "Chủ ngữ số ít thì hiện tại thêm s." },
        { q: "What ________ you eat for dinner yesterday evening?", options: ["did", "do", "were"], ans: 0, hint: "Hỏi quá khứ dùng did." },
        { q: "I didn't go to the party because I ________ sick.", options: ["was", "were", "am"], ans: 0, hint: "Quá khứ số ít dùng was." },
        { q: "Look! That boy is running too fast. He ________ fall!", options: ["is going to", "went to", "goes to"], ans: 0, hint: "Dự đoán trước mắt dùng Be going to." },
        { q: "________ quiet! The teacher is talking.", options: ["Be", "Is", "Are"], ans: 0, hint: "Mệnh lệnh với To Be bắt đầu bằng Be." },
        { q: "They ________ a fantastic movie last night.", options: ["saw", "see", "seen"], ans: 0, hint: "Quá khứ của see là saw." },
        { q: "________ you drink milk every morning?", options: ["Do", "Did", "Are"], ans: 0, hint: "Thói quen hàng ngày với you dùng Do." },
        { q: "He ________ watch TV yesterday.", options: ["didn't", "doesn't", "wasn't"], ans: 0, hint: "Phủ định quá khứ dùng didn't." },
        { q: "Where ________ the nearest supermarket?", options: ["is", "are", "do"], ans: 0, hint: "Supermarket số ít dùng is." },
        { q: "She is going to ________ very happy tomorrow.", options: ["be", "is", "was"], ans: 0, hint: "Sau going to phải có be nguyên thể trước tính từ." },
        { q: "Don't ________ the street when the light is red!", options: ["cross", "crossed", "crossing"], ans: 0, hint: "Don't + V nguyên thể." },
        { q: "Did he ________ you last night?", options: ["call", "called", "calling"], ans: 0, hint: "Sau did đưa về nguyên thể call." }
      ]
    }
  };
});
