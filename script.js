// ==============================================================================
// 1. KHO DỮ LIỆU TỔNG HỢP KHỔNG LỒ (LESSON DATABASE)
// ==============================================================================
const LESSON_DATABASE = {
  // BÀI 12.2: GIVING DIRECTIONS
  directions: {
    title: "Lesson 12.2: Directions",
    pairs: [
      { en: "Turn left", vi: "Rẽ trái" },
      { en: "Turn right", vi: "Rẽ phải" },
      { en: "Go straight ahead", vi: "Đi thẳng về phía trước" },
      { en: "Zebra crossing", vi: "Vạch qua đường" },
      { en: "Traffic light", vi: "Đèn giao thông" },
      { en: "Crossroads", vi: "Ngã tư" },
      { en: "Roundabout", vi: "Bùng binh / Vòng xoay" },
      { en: "Corner", vi: "Góc đường" },
      { en: "Next to", vi: "Ngay bên cạnh" },
      { en: "Opposite", vi: "Đối diện" },
      { en: "Between", vi: "Ở giữa" },
      { en: "Behind", vi: "Phía sau" },
      { en: "In front of", vi: "Phía trước" },
      { en: "Go past", vi: "Đi ngang qua" },
      { en: "Take the 1st turning", vi: "Rẽ ở ngã rẽ thứ nhất" },
      { en: "Take the 2nd turning", vi: "Rẽ ở ngã rẽ thứ hai" }
    ],
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
    ],
    reflex: [
      { text: "Excuse me, where is the nearest hospital?", isCorrect: true, fix: "Câu hỏi đường chuẩn xác!" },
      { text: "Don't turned left at the corner!", isCorrect: false, fix: "SAI! Đổi 'turned' thành 'turn': Don't turn left!" },
      { text: "Go straight ahead until you see the bank.", isCorrect: true, fix: "Câu chỉ đường chuẩn!" },
      { text: "Can I to have the direction, please?", isCorrect: false, fix: "SAI! Bỏ 'to': Can I have the directions, please?" },
      { text: "The café is opposite to the park.", isCorrect: false, fix: "SAI! 'Opposite' không đi với 'to': The café is opposite the park." },
      { text: "Take the second turning on your right.", isCorrect: true, fix: "Câu chỉ hướng chuẩn!" },
      { text: "Cross the road and you will see it.", isCorrect: true, fix: "Mẫu câu chỉ đường đúng ngữ pháp." },
      { text: "She were at the bus stop 10 minutes ago.", isCorrect: false, fix: "SAI! 'She' đi với 'was': She was at the bus stop." }
    ],
    wordGuess: [
      { word: "CROSSROADS", clue: "A place where two or more roads meet or cross each other.", viHint: "Ngã tư" },
      { word: "ROUNDABOUT", clue: "A circular place where several roads meet and drivers go around a central island.", viHint: "Bùng binh / Vòng xoay" },
      { word: "TRAFFIC LIGHT", clue: "A set of automatically operated colored lights (red, yellow, green) for controlling traffic.", viHint: "Đèn giao thông" },
      { word: "ZEBRA CROSSING", clue: "Black and white stripes on the road where pedestrians have the right to cross safely.", viHint: "Vạch qua đường" },
      { word: "CORNER", clue: "The point or angle where two roads or streets meet.", viHint: "Góc đường" },
      { word: "OPPOSITE", clue: "Being on the other side of a space, street, or room.", viHint: "Đối diện" },
      { word: "BETWEEN", clue: "In the space separating two places, things, or people.", viHint: "Ở giữa" },
      { word: "HOSPITAL", clue: "An institution providing medical treatment and nursing care for sick or injured people.", viHint: "Bệnh viện" },
      { word: "PHARMACY", clue: "A shop where medicinal drugs and health items are sold.", viHint: "Hiệu thuốc" },
      { word: "STRAIGHT", clue: "Continuing in one direction without curving or turning.", viHint: "Thẳng (Go straight ahead)" }
    ],
    scramble: [
      { correct: "Turn left at the next traffic light.", vi: "Rẽ trái ở đèn giao thông tiếp theo." },
      { correct: "The museum is opposite the old post office.", vi: "Bảo tàng nằm đối diện bưu điện cũ." },
      { correct: "Go straight ahead until you reach the roundabout.", vi: "Đi thẳng cho đến khi bạn đến bùng binh." },
      { correct: "Excuse me, where is the nearest pharmacy?", vi: "Xin lỗi, hiệu thuốc gần nhất ở đâu vậy?" },
      { correct: "You can't miss the big blue sign.", vi: "Bạn không thể bỏ lỡ tấm biển xanh to đó đâu." },
      { correct: "The park is between the school and the hospital.", vi: "Công viên nằm giữa trường học và bệnh viện." },
      { correct: "Don't turn right at the first crossroads.", vi: "Đừng rẽ phải ở ngã tư đầu tiên." },
      { correct: "It takes about ten minutes on foot.", vi: "Đi bộ mất khoảng mười phút." }
    ]
  },

  // BÀI 13: TRAVEL & HOLIDAYS
  travel: {
    title: "Lesson 13: Travel & Holidays",
    pairs: [
      { en: "Passport", vi: "Hộ chiếu" },
      { en: "Suitcase", vi: "Va-li kéo" },
      { en: "Sunscreen", vi: "Kem chống nắng" },
      { en: "Swimsuit", vi: "Đồ bơi" },
      { en: "Sunglasses", vi: "Kính râm" },
      { en: "Boarding pass", vi: "Thẻ lên máy bay" },
      { en: "Buy souvenirs", vi: "Mua quà lưu niệm" },
      { en: "Take photos", vi: "Chụp ảnh" },
      { en: "Local food", vi: "Món ăn địa phương" },
      { en: "Resort", vi: "Khu nghỉ dưỡng" },
      { en: "Go sightseeing", vi: "Đi ngắm cảnh" },
      { en: "Book a room", vi: "Đặt phòng" },
      { en: "Peaceful", vi: "Yên bình" },
      { en: "Crowded", vi: "Đông đúc" },
      { en: "Wonderful", vi: "Tuyệt vời" },
      { en: "Delicious", vi: "Ngon miệng" }
    ],
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
    ],
    reflex: [
      { text: "Tomorrow is going to sunny and warm.", isCorrect: false, fix: "SAI! Thiếu 'be': Tomorrow is going to BE sunny!" },
      { text: "We took a lot of photos on the beach.", isCorrect: true, fix: "Câu kể quá khứ chuẩn!" },
      { text: "Yesterday I was buy a new swimsuit.", isCorrect: false, fix: "SAI! Bỏ 'was': Yesterday I BOUGHT a new swimsuit." },
      { text: "Why don't we rent a car?", isCorrect: true, fix: "Mẫu câu rủ rê chuẩn!" },
      { text: "How about go to the museum this afternoon?", isCorrect: false, fix: "SAI! Đổi 'go' thành 'going': How about GOING...?" },
      { text: "Did you bought any souvenirs?", isCorrect: false, fix: "SAI! Sau 'did' đưa về nguyên thể: Did you BUY...?" },
      { text: "I'd like to book a flight ticket, please.", isCorrect: true, fix: "Mẫu câu yêu cầu lịch sự chuẩn!" },
      { text: "The seafood in Nha Trang was delicious.", isCorrect: true, fix: "Câu khen ngợi ẩm thực chuẩn!" }
    ],
    wordGuess: [
      { word: "PASSPORT", clue: "An official government document certifying identity for travelling abroad.", viHint: "Hộ chiếu" },
      { word: "SUITCASE", clue: "A portable rectangular case with handles used for packing clothes when traveling.", viHint: "Va-li kéo" },
      { word: "SUNSCREEN", clue: "A cream or lotion rubbed onto the skin to protect it from sunburn.", viHint: "Kem chống nắng" },
      { word: "SWIMSUIT", clue: "A piece of clothing worn for swimming.", viHint: "Đồ bơi" },
      { word: "SUNGLASSES", clue: "Spectacles with dark lenses to protect eyes from strong sunlight.", viHint: "Kính râm" },
      { word: "BOARDING PASS", clue: "A document provided by an airline to allow a passenger on an airplane.", viHint: "Thẻ lên máy bay" },
      { word: "SOUVENIR", clue: "Something you buy or keep to remember a holiday or special place.", viHint: "Quà lưu niệm" },
      { word: "RESORT", clue: "A holiday destination popular for recreation, sports, and relaxation.", viHint: "Khu nghỉ dưỡng" },
      { word: "PEACEFUL", clue: "Quiet and calm, without noise, worry, or problems.", viHint: "Yên bình" },
      { word: "CROWDED", clue: "Full of people, leaving very little space to move.", viHint: "Đông đúc" }
    ],
    scramble: [
      { correct: "We are going to visit Da Nang next week.", vi: "Chúng tôi sẽ đi thăm Đà Nẵng vào tuần tới." },
      { correct: "I forgot to pack my sunscreen and sunglasses.", vi: "Tôi quên mang theo kem chống nắng và kính râm." },
      { correct: "Did you buy any souvenirs at the market?", vi: "Bạn đã mua quà lưu niệm nào ở chợ chưa?" },
      { correct: "The resort was peaceful but a little expensive.", vi: "Khu nghỉ dưỡng yên bình nhưng hơi đắt." },
      { correct: "Let's rent a motorbike to explore the city.", vi: "Hãy thuê một chiếc xe máy để khám phá thành phố." },
      { correct: "The beach was crowded during the summer holiday.", vi: "Bãi biển đông đúc vào kỳ nghỉ hè." },
      { correct: "I would like to book a room for two nights.", vi: "Tôi muốn đặt một phòng trong hai đêm." },
      { correct: "We took a lot of photos on the island.", vi: "Chúng tôi đã chụp rất nhiều ảnh trên đảo." }
    ]
  },

  // BÀI 14: HOTEL & ACCOMMODATION (KHÁCH SẠN & LƯU TRÚ)
  hotel: {
    title: "Lesson 14: Hotel & Accommodation",
    
    // ==================== 1. TỪ VỰNG GHÉP CẶP (COOL PAIR) ====================
    // Toàn bộ 45 từ vựng xuất hiện trong tài liệu bài học
    pairs: [
      // Cơ sở vật chất & Loại phòng
      { en: "Hotel", vi: "Khách sạn" },
      { en: "Reception / Front desk", vi: "Quầy lễ tân" },
      { en: "Receptionist", vi: "Nhân viên lễ tân" },
      { en: "Lobby", vi: "Sảnh khách sạn" },
      { en: "Elevator / Lift", vi: "Thang máy" },
      { en: "Single room", vi: "Phòng đơn (1 giường đơn)" },
      { en: "Double room", vi: "Phòng đôi (1 giường lớn)" },
      { en: "Twin room", vi: "Phòng 2 giường đơn" },
      { en: "Family room", vi: "Phòng lớn cho gia đình" },
      { en: "Balcony", vi: "Ban công" },
      { en: "Swimming pool", vi: "Hồ bơi" },
      { en: "Sea-view room", vi: "Phòng nhìn ra biển" },
      { en: "City-view room", vi: "Phòng nhìn ra thành phố" },
      { en: "Non-smoking room", vi: "Phòng không hút thuốc" },

      // Tiện nghi phòng & Dịch vụ
      { en: "Key card", vi: "Thẻ từ mở cửa phòng" },
      { en: "Air conditioner (AC)", vi: "Máy lạnh / Điều hòa" },
      { en: "Remote control", vi: "Điều khiển từ xa" },
      { en: "Lamp", vi: "Đèn ngủ / Đèn bàn" },
      { en: "Hairdryer", vi: "Máy sấy tóc" },
      { en: "Pillow", vi: "Cái gối" },
      { en: "Blanket", vi: "Cái chăn / Mền" },
      { en: "Kettle", vi: "Ấm đun nước siêu tốc" },
      { en: "Wi-Fi password", vi: "Mật khẩu Wi-Fi" },
      { en: "Room service", vi: "Dịch vụ phục vụ tại phòng" },
      { en: "Mini-fridge", vi: "Tủ lạnh mini" },
      { en: "Power outlet / Socket", vi: "Ổ cắm điện" },
      { en: "Luggage", vi: "Hành lý" },

      // Vật dụng phòng tắm
      { en: "Towel", vi: "Khăn tắm" },
      { en: "Toothbrush", vi: "Bàn chải đánh răng" },
      { en: "Toothpaste", vi: "Kem đánh răng" },
      { en: "Shampoo", vi: "Dầu gội đầu" },
      { en: "Shower gel / Soap", vi: "Sữa tắm / Xà phòng" },
      { en: "Toilet paper", vi: "Giấy vệ sinh" },
      { en: "Hot water", vi: "Nước nóng" },

      // Nhân viên & Dịch vụ khách sạn
      { en: "Housekeeper", vi: "Nhân viên dọn phòng" },
      { en: "Bellman / Porter", vi: "Nhân viên mang hành lý" },
      { en: "Laundry service", vi: "Dịch vụ giặt ủi" },
      { en: "Breakfast buffet", vi: "Tiệc sáng tự chọn" },
      { en: "Luggage storage", vi: "Dịch vụ gửi giữ hành lý" },

      // Báo sự cố & Tính từ
      { en: "Broken", vi: "Bị hỏng / Hư hỏng" },
      { en: "Noisy", vi: "Ồn ào" },
      { en: "Dirty", vi: "Bị bẩn / Dơ" },
      { en: "Clean", vi: "Sạch sẽ" },
      { en: "Spacious", vi: "Rộng rãi, thoáng mát" },
      { en: "Comfortable", vi: "Thoải mái, dễ chịu" }
    ],

    // ==================== 2. SÚT BÓNG NGỮ PHÁP (GOAL STRIKER) ====================
    grammar: [
      {
        q: "Could you please ________ someone to check the air conditioner?",
        options: ["send", "sending", "to send"],
        ans: 0,
        hint: "Sau 'Could you please' dùng động từ nguyên mẫu không 'to'."
      },
      {
        q: "I have a reservation ________ the name Linh Nguyen.",
        options: ["under", "at", "on"],
        ans: 0,
        hint: "Cụm từ chuẩn: reservation UNDER the name of..."
      },
      {
        q: "There ________ no hot water in my shower this morning.",
        options: ["was", "is", "were"],
        ans: 0,
        hint: "Nước nóng (water) là danh từ không đếm được, mốc 'this morning' dùng was."
      },
      {
        q: "The air conditioner in my room ________ work.",
        options: ["doesn't", "isn't", "don't"],
        ans: 0,
        hint: "Work là động từ hành động, ngôi số ít phủ định dùng doesn't."
      },
      {
        q: "Can I ________ two extra towels and a hairdryer, please?",
        options: ["have", "having", "had"],
        ans: 0,
        hint: "Mẫu câu yêu cầu đồ lịch sự: Can I have + [đồ vật]?"
      },
      {
        q: "There ________ no towels in the bathroom.",
        options: ["are", "is", "was"],
        ans: 0,
        hint: "Towels là danh từ số nhiều, đi với There are no."
      },
      {
        q: "We would like ________ out now.",
        options: ["to check", "check", "checking"],
        ans: 0,
        hint: "Cấu trúc: Would like + TO V."
      },
      {
        q: "Is breakfast ________ in the room price?",
        options: ["included", "include", "including"],
        ans: 0,
        hint: "Câu hỏi bị động: Is breakfast included...?"
      },
      {
        q: "Could we ________ out one hour late?",
        options: ["check", "to check", "checking"],
        ans: 0,
        hint: "Sau Could we dùng động từ nguyên thể."
      },
      {
        q: "Where can I ________ the remote control for the TV?",
        options: ["find", "found", "finding"],
        ans: 0,
        hint: "Sau Can/Could dùng V nguyên thể: can I find."
      },
      {
        q: "The room next door ________ very noisy last night.",
        options: ["was", "is", "were"],
        ans: 0,
        hint: "Chủ ngữ số ít 'The room', mốc thời gian 'last night' dùng was."
      },
      {
        q: "Could someone ________ our room now? We are going out.",
        options: ["clean", "cleaned", "cleaning"],
        ans: 0,
        hint: "Could someone + V-nguyên thể: clean."
      },
      {
        q: "Can we get a room ________ a nice sea view?",
        options: ["with", "for", "in"],
        ans: 0,
        hint: "Phòng có tầm nhìn gì: a room WITH a view."
      },
      {
        q: "Could you please keep our luggage ________ check-in time?",
        options: ["before", "under", "between"],
        ans: 0,
        hint: "Trước giờ nhận phòng: before check-in time."
      },
      {
        q: "Can I pay ________ credit card or cash?",
        options: ["by", "with", "on"],
        ans: 0,
        hint: "Thanh toán bằng thẻ: pay by credit card."
      }
    ],

    // ==================== 3. ĐÈN XANH - ĐÈN ĐỎ (RED/GREEN LIGHT) ====================
    reflex: [
      {
        text: "Can I to have the Wi-Fi password, please?",
        isCorrect: false,
        fix: "SAI! Bỏ 'to': Can I HAVE the Wi-Fi password, please?"
      },
      {
        text: "The air conditioner in my room doesn't work.",
        isCorrect: true,
        fix: "CHÍNH XÁC! Mẫu câu báo thiết bị hỏng chuẩn."
      },
      {
        text: "There is no towels in the bathroom.",
        isCorrect: false,
        fix: "SAI! 'Towels' là danh từ số nhiều: There ARE no towels."
      },
      {
        text: "Could you please send someone to check the TV?",
        isCorrect: true,
        fix: "CHÍNH XÁC! Câu nhờ vả nhân viên khách sạn rất lịch sự."
      },
      {
        text: "The key card doesn't works, could you check it?",
        isCorrect: false,
        fix: "SAI! Sau 'doesn't' động từ giữ nguyên: doesn't WORK."
      },
      {
        text: "I booked a double room online through Agoda.",
        isCorrect: true,
        fix: "CHÍNH XÁC! Mẫu câu báo đã đặt phòng qua mạng."
      },
      {
        text: "The shower has no hot water at all.",
        isCorrect: true,
        fix: "CHÍNH XÁC! Mẫu câu báo mất nước nóng chuẩn."
      },
      {
        text: "Could you wake me up at 6:00 AM tomorrow morning?",
        isCorrect: true,
        fix: "CHÍNH XÁC! Yêu cầu dịch vụ báo thức qua điện thoại."
      },
      {
        text: "We would like to checking out now.",
        isCorrect: false,
        fix: "SAI! Sau 'would like' dùng to-V: would like TO CHECK out now."
      },
      {
        text: "Could you please keep our luggage before check-in?",
        isCorrect: true,
        fix: "CHÍNH XÁC! Mẫu câu xin gửi đồ trước giờ nhận phòng."
      }
    ],
    wordGuess: [
      { word: "KEY CARD", clue: "A plastic card containing magnetic data used to unlock a hotel room.", viHint: "Thẻ từ mở phòng" },
      { word: "RECEPTION", clue: "The counter or desk in a hotel where guests check in and get keys.", viHint: "Quầy lễ tân" },
      { word: "RECEPTIONIST", clue: "The staff member who welcomes guests and manages hotel bookings.", viHint: "Nhân viên lễ tân" },
      { word: "LOBBY", clue: "A large entrance hall or foyer inside a hotel or building.", viHint: "Sảnh khách sạn" },
      { word: "ELEVATOR", clue: "A lifting system in a shaft that carries people between different floors.", viHint: "Thang máy" },
      { word: "BALCONY", clue: "An outside platform with a rail projecting from an upper-floor room.", viHint: "Ban công" },
      { word: "TOWEL", clue: "A soft piece of absorbent cloth used for drying your body after a shower.", viHint: "Khăn tắm" },
      { word: "PILLOW", clue: "A soft rectangular cushion used for resting your head in bed.", viHint: "Cái gối" },
      { word: "BLANKET", clue: "A thick covering for a bed that keeps you warm while sleeping.", viHint: "Cái chăn / Mền" },
      { word: "HAIRDRYER", clue: "An electric blower that dries hair using warm air.", viHint: "Máy sấy tóc" },
      { word: "LUGGAGE", clue: "Suitcases and bags packed with personal items for traveling.", viHint: "Hành lý" },
      { word: "KETTLE", clue: "An electric appliance used for boiling water quickly for tea or coffee.", viHint: "Ấm đun nước" }
    ],
    scramble: [
      { correct: "Could you send someone to fix the air conditioner?", vi: "Bạn có thể cử ai đó đến sửa máy lạnh không?" },
      { correct: "I have a reservation under the name Linh Nguyen.", vi: "Tôi có đặt phòng dưới tên Linh Nguyen." },
      { correct: "There is no hot water in my bathroom.", vi: "Không có nước nóng trong phòng tắm của tôi." },
      { correct: "Can I have two extra towels, please?", vi: "Tôi có thể xin thêm hai chiếc khăn tắm được không?" },
      { correct: "We would like to check out now.", vi: "Chúng tôi muốn trả phòng ngay bây giờ." },
      { correct: "Is breakfast included in the room price?", vi: "Bữa sáng có được tính trong giá phòng không?" },
      { correct: "The room next door was very noisy last night.", vi: "Phòng bên cạnh rất ồn vào tối qua." },
      { correct: "Could you keep our luggage before check-in time?", vi: "Bạn có thể giữ hành lý giúp chúng tôi trước giờ nhận phòng không?" }
    ]
  }
,
  // BÀI ÔN TẬP TỔNG HỢP NGỮ PHÁP (30 CÂU ĐA DẠNG)
  grammar_review: {
    title: "Grammar Review: 30 Master Questions",
    pairs: [
      { en: "Yesterday", vi: "Ngày hôm qua" },
      { en: "Every day", vi: "Mỗi ngày" },
      { en: "Tomorrow", vi: "Ngày mai" },
      { en: "Last night", vi: "Tối hôm qua" },
      { en: "Next week", vi: "Tuần sau" },
      { en: "Usually", vi: "Thường xuyên" },
      { en: "Did not", vi: "Đã không làm gì" },
      { en: "Is going to", vi: "Dự định sẽ" }
    ],
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
    ],
    reflex: [
      { text: "Yesterday I was buy a new dress.", isCorrect: false, fix: "SAI! Bỏ 'was': Yesterday I BOUGHT a new dress." },
      { text: "She likes drinking coffee every morning.", isCorrect: true, fix: "Câu thói quen hiện tại chuẩn!" },
      { text: "He didn't went to school yesterday.", isCorrect: false, fix: "SAI! Sau didn't giữ nguyên: didn't GO." },
      { text: "Tomorrow it is going to rain heavily.", isCorrect: true, fix: "Thì tương lai gần chuẩn!" },
      { text: "Why didn't you pack your suitcase?", isCorrect: true, fix: "Câu hỏi quá khứ chuẩn!" },
      { text: "There was no hot water this morning.", isCorrect: true, fix: "Câu mô tả quá khứ chuẩn!" },
      { text: "Where are you went last night?", isCorrect: false, fix: "SAI! Đổi: Where DID you GO last night?" },
      { text: "Let's to order room service now.", isCorrect: false, fix: "SAI! Bỏ 'to': Let's ORDER room service." }
    ],
    wordGuess: [
      { word: "YESTERDAY", clue: "The day immediately before today.", viHint: "Ngày hôm qua" },
      { word: "TOMORROW", clue: "The day immediately following today.", viHint: "Ngày mai" },
      { word: "USUALLY", clue: "Under normal conditions; generally or customarily.", viHint: "Thường xuyên" },
      { word: "HOLIDAY", clue: "A period of recreation, travel, or celebration away from regular work.", viHint: "Kỳ nghỉ" },
      { word: "COFFEE", clue: "A popular hot beverage brewed from roasted coffee beans.", viHint: "Cà phê" },
      { word: "SUPERMARKET", clue: "A large store selling food, drinks, and various household goods.", viHint: "Siêu thị" },
      { word: "MORNING", clue: "The first period of the day from dawn until noon.", viHint: "Buổi sáng" },
      { word: "DELICIOUS", clue: "Having a very pleasant and enjoyable taste or smell.", viHint: "Ngon miệng" }
    ],
    scramble: [
      { correct: "She usually drinks coffee every morning.", vi: "Cô ấy thường uống cà phê mỗi buổi sáng." },
      { correct: "They bought a new car two weeks ago.", vi: "Họ đã mua một chiếc xe mới hai tuần trước." },
      { correct: "He didn't go to school yesterday.", vi: "Hôm qua cậu ấy đã không đi học." },
      { correct: "Look! That boy is going to fall.", vi: "Nhìn kìa! Cậu bé đó sắp ngã rồi." },
      { correct: "Where did you go on holiday last summer?", vi: "Bạn đã đi đâu nghỉ mát vào hè năm ngoái?" },
      { correct: "Tomorrow it is going to rain heavily.", vi: "Ngày mai trời sẽ mưa to." },
      { correct: "What time does she usually wake up?", vi: "Mấy giờ cô ấy thường thức dậy?" },
      { correct: "We were at home last Sunday.", vi: "Chúng tôi đã ở nhà vào chủ nhật tuần trước." }
    ]
  }
};

// ==============================================================================
// 2. STATE VÀ LOGIC ĐIỀU KHIỂN
// ==============================================================================
let currentLessonKey = "directions";
let currentGameType = "pair";
let currentTurn = 0; // 0: Player 1, 1: Player 2

const players = [
  { id: 0, name: "Student 1", score: 0, hearts: 3 },
  { id: 1, name: "Student 2", score: 0, hearts: 3 }
];

const WIN_SCORE = 200; // Đạt mốc điểm này là thắng tuyệt đối

window.addEventListener("DOMContentLoaded", () => {
  renderScoreboard();
  loadGame();
  initMusicPlayer();
});

// Phát ngẫu nhiên các tệp nhạc do người dùng chọn (không tải nhạc có bản quyền kèm trang).
const GHIBLI_TRACK_SUGGESTIONS = [
  "Merry-Go-Round of Life",
  "One Summer's Day",
  "Carrying You",
  "The Path of the Wind",
  "Always With Me",
  "A Town with an Ocean View"
];

function initMusicPlayer() {
  const audio = document.getElementById("backgroundAudio");
  const filePicker = document.getElementById("musicFiles");
  const pickButton = document.getElementById("musicPick");
  const toggleButton = document.getElementById("musicToggle");
  const randomButton = document.getElementById("musicRandom");
  const volumeControl = document.getElementById("musicVolume");
  const trackTitle = document.getElementById("musicTrackTitle");
  const status = document.getElementById("musicStatus");

  let musicFiles = [];
  let currentIndex = -1;
  let lastIndex = -1;
  let currentObjectUrl = "";

  function updatePlaybackState() {
    const isPlaying = !audio.paused;
    toggleButton.textContent = isPlaying ? "⏸ Tạm dừng" : "▶ Phát";
    toggleButton.setAttribute("aria-pressed", String(isPlaying));
    status.textContent = isPlaying ? "Đang phát" : (musicFiles.length ? "Sẵn sàng" : "Chưa có nhạc");
  }

  function displayName(file) {
    const fileName = file.name.replace(/\.[^.]+$/, "");
    const normalizedName = fileName.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    const suggestedTitle = GHIBLI_TRACK_SUGGESTIONS.find((title) => {
      const normalizedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      return normalizedName.includes(normalizedTitle);
    });
    return suggestedTitle || fileName;
  }

  async function playRandomTrack() {
    if (!musicFiles.length) {
      status.textContent = "Hãy chọn tệp nhạc trước";
      return;
    }

    let nextIndex = Math.floor(Math.random() * musicFiles.length);
    if (musicFiles.length > 1 && nextIndex === lastIndex) {
      nextIndex = (nextIndex + 1 + Math.floor(Math.random() * (musicFiles.length - 1))) % musicFiles.length;
    }

    currentIndex = nextIndex;
    lastIndex = nextIndex;
    if (currentObjectUrl) URL.revokeObjectURL(currentObjectUrl);
    currentObjectUrl = URL.createObjectURL(musicFiles[currentIndex]);
    audio.src = currentObjectUrl;
    trackTitle.textContent = `♪ ${displayName(musicFiles[currentIndex])}`;

    try {
      await audio.play();
      updatePlaybackState();
    } catch (error) {
      status.textContent = "Nhấn Phát để nghe bài này";
      updatePlaybackState();
    }
  }

  pickButton.addEventListener("click", () => filePicker.click());
  filePicker.addEventListener("change", () => {
    audio.pause();
    if (currentObjectUrl) URL.revokeObjectURL(currentObjectUrl);
    currentObjectUrl = "";
    musicFiles = Array.from(filePicker.files).filter((file) => file.type.startsWith("audio/"));
    currentIndex = -1;
    lastIndex = -1;
    toggleButton.disabled = musicFiles.length === 0;
    randomButton.disabled = musicFiles.length === 0;

    if (musicFiles.length) {
      trackTitle.textContent = `${musicFiles.length} tệp nhạc đã sẵn sàng — nhấn “Bài ngẫu nhiên”`;
      status.textContent = "Đã tải danh sách";
    } else {
      trackTitle.textContent = "Chọn các tệp nhạc để bắt đầu";
      status.textContent = "Chưa có nhạc";
    }
    updatePlaybackState();
  });

  toggleButton.addEventListener("click", async () => {
    if (audio.paused) {
      if (currentIndex < 0) {
        await playRandomTrack();
        return;
      }
      try {
        await audio.play();
      } catch (error) {
        status.textContent = "Không thể phát tệp này";
      }
    } else {
      audio.pause();
    }
    updatePlaybackState();
  });

  randomButton.addEventListener("click", playRandomTrack);
  volumeControl.addEventListener("input", () => {
    audio.volume = Number(volumeControl.value);
  });
  audio.addEventListener("play", updatePlaybackState);
  audio.addEventListener("pause", updatePlaybackState);
  audio.addEventListener("ended", playRandomTrack);
  audio.volume = Number(volumeControl.value);
}

function switchLesson(lessonKey) {
  currentLessonKey = lessonKey;
  currentWordIndex = 0;
  userTypedLetters = [];
  showHintVi = false;
  isWordCompleted = false;
  currentScrambleIndex = 0;
  scrambleTokensText = [];
  scramblePoolIds = [];
  scrambleAnswerIds = [];
  isScrambleChecked = false;
  resetCurrentGame();
  logMsg(`SWITCHED TO: ${LESSON_DATABASE[lessonKey].title}`);
}

function switchGame(gameType) {
  currentGameType = gameType;
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  if (gameType === 'pair') document.getElementById("tab-game1").classList.add("active");
  if (gameType === 'goalkeeper') document.getElementById("tab-game2").classList.add("active");
  if (gameType === 'light') document.getElementById("tab-game3").classList.add("active");
  if (gameType === 'wordguess') document.getElementById("tab-game4").classList.add("active");
  if (gameType === 'scramble') document.getElementById("tab-game5").classList.add("active");
  loadGame();
}

// Xử lý mất tim và kiểm tra GAME OVER (THUA khi hết tim)
function deductHeart(p) {
  if (p.hearts > 0) {
    p.hearts--;
  }
  renderScoreboard();

  // Kiểm tra nếu người chơi này đã hết tim mà vẫn sai
  if (p.hearts <= 0) {
    setTimeout(() => {
      const title = document.getElementById("gameover-title");
      title.innerText = "GAME OVER!";
      title.style.color = "#ef4444";
      document.getElementById("gameover-msg").innerHTML = `
        <b>${p.name.toUpperCase()} HAS RUN OUT OF HEARTS!</b><br><br>
        Final Score: ${p.score} PTS. Keep trying next time!
      `;
      document.getElementById("gameover-modal").style.display = "flex";
    }, 600);
    return true; // Đã Game Over (THUA)
  }
  return false;
}

// Kiểm tra nếu người chơi đã đạt mốc điểm thắng (WIN_SCORE)
function checkWinCondition(p) {
  if (p.score >= WIN_SCORE) {
    setTimeout(() => {
      const title = document.getElementById("gameover-title");
      title.innerText = "🏆 VICTORY!";
      title.style.color = "#22c55e";
      document.getElementById("gameover-msg").innerHTML = `
        <b>${p.name.toUpperCase()} REACHED ${WIN_SCORE} PTS!</b><br><br>
        Final Score: ${p.score} PTS. Congratulations, Champion! 🎉
      `;
      document.getElementById("gameover-modal").style.display = "flex";
    }, 600);
    return true; // Đã Thắng
  }
  return false;
}

function resetCurrentGame() {
  document.getElementById("gameover-modal").style.display = "none";
  // Reset lại toàn bộ máu và điểm số của cả 2 học viên về 0
  players[0].hearts = 3;
  players[0].score = 0;
  players[1].hearts = 3;
  players[1].score = 0;
  
  currentTurn = 0; // Đưa lượt chơi về Player 1
  currentWordIndex = 0;
  userTypedLetters = [];
  showHintVi = false;
  isWordCompleted = false;
  currentScrambleIndex = 0;
  scrambleTokensText = [];
  scramblePoolIds = [];
  scrambleAnswerIds = [];
  isScrambleChecked = false;
  renderScoreboard();
  loadGame();
  logMsg("GAME HAS BEEN RESTARTED! SCORES & HEARTS RESET.");
}

function loadGame() {
  const arena = document.getElementById("gameArena");
  arena.innerHTML = "";
  if (currentGameType === 'pair') renderCoolPair(arena);
  if (currentGameType === 'goalkeeper') renderGoalStriker(arena);
  if (currentGameType === 'light') renderRedGreenLight(arena);
  if (currentGameType === 'wordguess') renderWordGuess(arena);
  if (currentGameType === 'scramble') renderSentenceScramble(arena);
}

// ==============================================================================
// 3. GAME 1: COOL PAIR (NGỬA TOÀN BỘ CÁC THẺ - GHÉP CẶP EN - VN)
// ==============================================================================
let selectedPairCards = [];

function renderCoolPair(container) {
  const lesson = LESSON_DATABASE[currentLessonKey];
  // Lấy ngẫu nhiên 8 cặp (16 thẻ) từ kho từ vựng
  const shuffledPairs = [...lesson.pairs].sort(() => 0.5 - Math.random()).slice(0, 8);
  const deck = [];

  shuffledPairs.forEach((item, index) => {
    deck.push({ pairId: index, text: item.en, type: "EN" });
    deck.push({ pairId: index, text: item.vi, type: "VN" });
  });

  deck.sort(() => 0.5 - Math.random());

  const grid = document.createElement("div");
  grid.className = "pair-grid";

  deck.forEach((cardData) => {
    const card = document.createElement("div");
    card.className = `pair-card motion-btn ${cardData.type === 'EN' ? 'en-card' : 'vi-card'}`;
    card.innerHTML = cardData.text; // NGỬA TOÀN BỘ TỪ ĐẦU
    card.onclick = () => handlePairClick(card, cardData);
    grid.appendChild(card);
  });

  container.appendChild(grid);
  logMsg("COOL PAIR: MATCH THE ENGLISH & VIETNAMESE CARDS!");
}

function handlePairClick(cardEl, cardData) {
  if (cardEl.classList.contains("selected") || cardEl.classList.contains("matched")) return;

  const curP = players[currentTurn];
  if (curP.hearts <= 0) return;

  cardEl.classList.add("selected");
  selectedPairCards.push({ el: cardEl, data: cardData });

  if (selectedPairCards.length === 2) {
    const [c1, c2] = selectedPairCards;

    // Không được chọn 2 thẻ cùng loại (ví dụ 2 thẻ EN hoặc 2 thẻ VN)
    if (c1.data.type !== c2.data.type && c1.data.pairId === c2.data.pairId) {
      // MATCH THÀNH CÔNG
      setTimeout(() => {
        c1.el.classList.add("matched");
        c2.el.classList.add("matched");
        curP.score += 10;
        logMsg(`CORRECT MATCH! ${curP.name} +10 PTS!`);
        selectedPairCards = [];
        renderScoreboard();
        checkWinCondition(curP);
      }, 400);
    } else {
      // CHỌN SAI
      setTimeout(() => {
        c1.el.classList.remove("selected");
        c2.el.classList.remove("selected");
        selectedPairCards = [];
        logMsg(`NOT A MATCH! ${curP.name} loses 1 heart.`);
        const isOver = deductHeart(curP);
        if (!isOver) currentTurn = (currentTurn + 1) % 2;
        renderScoreboard();
      }, 700);
    }
  }
}

// ==============================================================================
// 4. GAME 2: GOAL STRIKER (SÚT BÓNG VƯỢT CHƯỚNG NGẠI VẬT)
// ==============================================================================
let currentGrammarIndex = 0;

function renderGoalStriker(container) {
  const lesson = LESSON_DATABASE[currentLessonKey];
  const qData = lesson.grammar[currentGrammarIndex % lesson.grammar.length];
  const curP = players[currentTurn];

  container.innerHTML = `
    <div class="goal-arena">
      <div class="stadium-screen">
        <div class="goal-net" id="goalNet">🥅 GOAL</div>
        <div class="ball-striker" id="soccerBall">⚽</div>
      </div>

      <div class="question-box">
        <span style="color:#2563eb">[QUESTION FOR ${curP.name.toUpperCase()}]:</span><br><br>
        ${qData.q}
      </div>

      <div class="options-row">
        ${qData.options.map((opt, i) => `
          <button class="option-btn motion-btn" onclick="submitGoalAnswer(${i})">${opt}</button>
        `).join("")}
      </div>
    </div>
  `;

  logMsg(`GOAL STRIKER: ${curP.name}'S TURN TO SHOOT!`);
}

function submitGoalAnswer(chosenIndex) {
  const lesson = LESSON_DATABASE[currentLessonKey];
  const qData = lesson.grammar[currentGrammarIndex % lesson.grammar.length];
  const curP = players[currentTurn];
  const ball = document.getElementById("soccerBall");

  let isOver = false;
  if (chosenIndex === qData.ans) {
    ball.style.transform = "translateY(-70px) scale(0.6)";
    curP.score += 15;
    logMsg(`⚽ GOALLL! ${curP.name} SCORED! +15 PTS!`);
    isOver = checkWinCondition(curP);
  } else {
    ball.style.transform = "translate(-90px, -40px) scale(0.7)";
    logMsg(`❌ SAVED BY KEEPER! ${curP.name} lost 1 heart! Hint: ${qData.hint}`);
    isOver = deductHeart(curP);
  }

  renderScoreboard();
  if (isOver) return; // Dừng lượt chơi khi đã thắng hoặc thua

  setTimeout(() => {
    currentGrammarIndex++;
    currentTurn = (currentTurn + 1) % 2;
    renderScoreboard();
    loadGame();
  }, 1600);
}

// ==============================================================================
// 5. GAME 3: RED / GREEN LIGHT (ĐÈN XANH - ĐÈN ĐỎ PHẢN XẠ NHANH)
// ==============================================================================
let currentReflexIndex = 0;

function renderRedGreenLight(container) {
  const lesson = LESSON_DATABASE[currentLessonKey];
  const rData = lesson.reflex[currentReflexIndex % lesson.reflex.length];
  const curP = players[currentTurn];

  container.innerHTML = `
    <div class="light-arena">
      <div class="traffic-light-pillar">
        <div class="light-lamp lamp-green" id="lampGreen"></div>
        <div class="light-lamp lamp-red" id="lampRed"></div>
      </div>

      <div class="sentence-display">
        "${rData.text}"
      </div>

      <div class="light-decision-group">
        <button class="btn-choice-light btn-pass motion-btn" onclick="submitLightDecision(true)">
          🟢 GREEN (CORRECT)
        </button>
        <button class="btn-choice-light btn-fail motion-btn" onclick="submitLightDecision(false)">
          🔴 RED (ERROR)
        </button>
      </div>
    </div>
  `;

  logMsg(`RED/GREEN LIGHT: ${curP.name}, IS THIS SENTENCE CORRECT OR WRONG?`);
}

function submitLightDecision(isGreen) {
  const lesson = LESSON_DATABASE[currentLessonKey];
  const rData = lesson.reflex[currentReflexIndex % lesson.reflex.length];
  const curP = players[currentTurn];

  const lampGreen = document.getElementById("lampGreen");
  const lampRed = document.getElementById("lampRed");

  let isOver = false;
  if (isGreen === rData.isCorrect) {
    lampGreen.classList.add("on");
    curP.score += 10;
    logMsg(`CORRECT DECISION! ${curP.name} +10 PTS! ${rData.fix}`);
    isOver = checkWinCondition(curP);
  } else {
    lampRed.classList.add("on");
    logMsg(`WRONG DECISION! ${curP.name} lost 1 heart! ${rData.fix}`);
    isOver = deductHeart(curP);
  }

  renderScoreboard();
  if (isOver) return; // Dừng lượt chơi khi đã thắng hoặc thua

  setTimeout(() => {
    currentReflexIndex++;
    currentTurn = (currentTurn + 1) % 2;
    renderScoreboard();
    loadGame();
  }, 1800);
}

// ==============================================================================
// 6. BẢNG ĐIỂM & ĐỔI TÊN HỌC VIÊN
// ==============================================================================
function renderScoreboard() {
  document.getElementById("label-p1").innerText = players[0].name;
  document.getElementById("score-p1").innerText = `${players[0].score} PTS`;
  // Cố định số tim hiển thị không bao giờ bị âm
  const p1ValidHearts = Math.max(0, players[0].hearts);
  document.getElementById("hearts-p1").innerText = "❤️".repeat(p1ValidHearts) + "🖤".repeat(3 - p1ValidHearts);

  document.getElementById("label-p2").innerText = players[1].name;
  document.getElementById("score-p2").innerText = `${players[1].score} PTS`;
  const p2ValidHearts = Math.max(0, players[1].hearts);
  document.getElementById("hearts-p2").innerText = "❤️".repeat(p2ValidHearts) + "🖤".repeat(3 - p2ValidHearts);

  if (currentTurn === 0) {
    document.getElementById("star-p1").classList.add("active");
    document.getElementById("star-p2").classList.remove("active");
  } else {
    document.getElementById("star-p2").classList.add("active");
    document.getElementById("star-p1").classList.remove("active");
  }
}

function openNameModal() {
  document.getElementById("name-p1").value = players[0].name;
  document.getElementById("name-p2").value = players[1].name;
  document.getElementById("name-modal").style.display = "flex";
}

function saveNames() {
  players[0].name = document.getElementById("name-p1").value || "Student 1";
  players[1].name = document.getElementById("name-p2").value || "Student 2";
  document.getElementById("name-modal").style.display = "none";
  renderScoreboard();
}

function logMsg(msg) {
  document.getElementById("systemMsg").innerText = `► ${msg}`;
}

// ==============================================================================
// 7. GAME 4: WORD GUESS (ĐOÁN TỪ QUA MÔ TẢ & GẠCH DƯỚI)
// ==============================================================================
let currentWordIndex = 0;
let userTypedLetters = []; // Các chữ cái học viên đã gõ, khớp vị trí với từ cần đoán
let showHintVi = false;
let isWordCompleted = false;

function renderWordGuess(container) {
  const lesson = LESSON_DATABASE[currentLessonKey];
  const list = lesson.wordGuess || [];
  if (!list.length) {
    container.innerHTML = `<div style="font-weight:bold; font-size:16px; padding:20px;">No word guess puzzles for this lesson yet.</div>`;
    return;
  }

  const currentItem = list[currentWordIndex % list.length];
  const targetWord = currentItem.word.toUpperCase();
  const curP = players[currentTurn];

  const cleanLetters = targetWord.replace(/[^A-Z]/g, "").split("");
  // Giữ nguyên các ký tự đã gõ nếu đang đoán từ cũ, chỉ reset khi sang từ mới
  if (userTypedLetters.length !== cleanLetters.length) {
    userTypedLetters = cleanLetters.map(() => "");
  }

  // Tách các từ đơn (nếu cụm từ có nhiều từ cách nhau bởi khoảng trắng)
  const words = targetWord.split(" ");
  let flatIndex = 0;
  const wordTokensHtml = words.map(w => {
    const lettersHtml = w.split("").map(() => {
      const idx = flatIndex++;
      const typedVal = userTypedLetters[idx] || "";
      return `
        <input
          type="text"
          maxlength="1"
          class="letter-input"
          id="letter-input-${idx}"
          value="${typedVal}"
          ${isWordCompleted ? "disabled" : ""}
          oninput="handleLetterInputChange(this, ${idx})"
          onkeydown="handleLetterKeyDown(event, ${idx})"
          autocomplete="off"
          autocapitalize="characters"
        />
      `;
    }).join("");
    return `<div class="word-group">${lettersHtml}</div>`;
  }).join('<div class="word-gap"></div>');

  container.innerHTML = `
    <div class="word-guess-arena">
      <div class="guess-turn-header">
        <span class="player-turn-tag" style="color: ${curP.id === 0 ? '#2563eb' : '#ea580c'};">
          🎯 [CLUE FOR ${curP.name.toUpperCase()}]:
        </span>
        <span class="word-counter-badge">Word ${(currentWordIndex % list.length) + 1} / ${list.length} (${cleanLetters.length} letters)</span>
      </div>

      <div class="clue-card">
        <div class="clue-icon">📖</div>
        <div class="clue-text">
          "${currentItem.clue}"
        </div>
      </div>

      <div class="slots-container">
        ${wordTokensHtml}
      </div>

      <p class="enter-hint">⌨️ Type the word letter by letter, then press <b>ENTER</b> to submit!</p>

      <div class="guess-actions-bar">
        <button class="pixel-btn motion-btn btn-hint" onclick="toggleWordHint()">
          💡 ${showHintVi ? "ẨN NGHĨA" : "GỢI Ý TIẾNG VIỆT"}
        </button>
        ${showHintVi ? `<span class="hint-vi-text">Nghĩa: <b>${currentItem.viHint}</b></span>` : ""}
        <button class="pixel-btn motion-btn btn-sm" onclick="submitWordGuess()">SUBMIT (ENTER) ✅</button>
        <button class="pixel-btn motion-btn btn-sm btn-skip" onclick="skipWord()">BỎ QUA / TỪ TIẾP ⏭</button>
      </div>
    </div>
  `;

  if (!isWordCompleted) {
    logMsg(`WORD GUESS: ${curP.name}'s turn! Type the word and press ENTER.`);
    document.getElementById("letter-input-0")?.focus();
  }
}

// Chuẩn hóa ký tự gõ vào (chỉ A-Z) và tự động nhảy sang ô tiếp theo
function handleLetterInputChange(inputEl, idx) {
  const cleanChar = inputEl.value.toUpperCase().replace(/[^A-Z]/g, "").slice(-1);
  inputEl.value = cleanChar;
  userTypedLetters[idx] = cleanChar;

  if (cleanChar) {
    const nextInput = document.getElementById(`letter-input-${idx + 1}`);
    if (nextInput) nextInput.focus();
  }
}

// Xử lý phím Enter (nộp bài), Backspace (lùi ô) và mũi tên trái/phải (điều hướng)
function handleLetterKeyDown(event, idx) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitWordGuess();
    return;
  }
  if (event.key === "Backspace" && !event.target.value) {
    const prevInput = document.getElementById(`letter-input-${idx - 1}`);
    if (prevInput) prevInput.focus();
  }
  if (event.key === "ArrowLeft") {
    document.getElementById(`letter-input-${idx - 1}`)?.focus();
  }
  if (event.key === "ArrowRight") {
    document.getElementById(`letter-input-${idx + 1}`)?.focus();
  }
}

// Nộp đáp án: kiểm tra toàn bộ từ đã gõ, đúng thì cộng điểm, sai thì trừ 1 tym
function submitWordGuess() {
  if (currentGameType !== "wordguess" || isWordCompleted) return;

  const lesson = LESSON_DATABASE[currentLessonKey];
  const list = lesson.wordGuess || [];
  if (!list.length) return;

  const currentItem = list[currentWordIndex % list.length];
  const targetWord = currentItem.word.toUpperCase();
  const cleanLetters = targetWord.replace(/[^A-Z]/g, "").split("");
  const curP = players[currentTurn];
  if (curP.hearts <= 0) return;

  const attempt = userTypedLetters.join("");
  if (attempt.length < cleanLetters.length || userTypedLetters.includes("")) {
    logMsg("⚠️ PLEASE FILL IN ALL LETTERS BEFORE PRESSING ENTER!");
    return;
  }

  // Khóa các ô nhập ngay lập tức, tránh re-render toàn bộ để thông báo không bị ghi đè
  const allInputs = document.querySelectorAll(".letter-input");
  allInputs.forEach(inp => { inp.disabled = true; });

  let isOver = false;
  if (attempt === cleanLetters.join("")) {
    // ĐOÁN ĐÚNG CẢ TỪ
    isWordCompleted = true;
    curP.score += 20;
    allInputs.forEach(inp => inp.classList.add("correct-flash"));
    logMsg(`🎉 CORRECT! ${curP.name} GUESSED "${targetWord}"! +20 PTS!`);
    renderScoreboard();
    isOver = checkWinCondition(curP);
  } else {
    // ĐOÁN SAI CẢ TỪ
    allInputs.forEach(inp => inp.classList.add("wrong-flash"));
    logMsg(`❌ WRONG! "${attempt}" is not correct. The hint word has ${cleanLetters.length} letters. ${curP.name} lost 1 heart.`);
    isOver = deductHeart(curP);
  }

  if (isOver) return; // Dừng lượt chơi khi đã thắng hoặc thua

  setTimeout(() => {
    currentWordIndex++;
    userTypedLetters = [];
    showHintVi = false;
    isWordCompleted = false;
    currentTurn = (currentTurn + 1) % 2;
    renderScoreboard();
    loadGame();
  }, 1800);
}

function toggleWordHint() {
  showHintVi = !showHintVi;
  loadGame();
}

function skipWord() {
  currentWordIndex++;
  userTypedLetters = [];
  showHintVi = false;
  isWordCompleted = false;
  loadGame();
  logMsg("SKIPPED TO NEXT WORD PUZZLE!");
}

// ==============================================================================
// 8. GAME 5: SENTENCE SCRAMBLE (SẮP XẾP LẠI THỨ TỰ TỪ TRONG CÂU)
// ==============================================================================
let currentScrambleIndex = 0;
let scrambleTokensText = []; // Các từ của câu đúng, id = vị trí gốc (đúng thứ tự)
let scramblePoolIds = []; // Id các từ còn nằm trong kho (đã xáo trộn)
let scrambleAnswerIds = []; // Id các từ học viên đã chọn, theo thứ tự đã đặt
let isScrambleChecked = false;

function shuffleArray(arr) {
  return [...arr].sort(() => 0.5 - Math.random());
}

function renderSentenceScramble(container) {
  const lesson = LESSON_DATABASE[currentLessonKey];
  const list = lesson.scramble || [];
  if (!list.length) {
    container.innerHTML = `<div style="font-weight:bold; font-size:16px; padding:20px;">No sentence scramble puzzles for this lesson yet.</div>`;
    return;
  }

  const currentItem = list[currentScrambleIndex % list.length];
  const curP = players[currentTurn];

  // Nếu là câu mới (chưa khởi tạo token), xáo trộn lại từ đầu
  if (scrambleTokensText.length === 0 || scrambleTokensText.join(" ") !== currentItem.correct) {
    scrambleTokensText = currentItem.correct.split(" ");
    scramblePoolIds = shuffleArray(scrambleTokensText.map((_, i) => i));
    scrambleAnswerIds = [];
    isScrambleChecked = false;
  }

  const answerHtml = scrambleAnswerIds.length
    ? scrambleAnswerIds.map(id => `
        <button class="scramble-token placed-token motion-btn" ${isScrambleChecked ? "disabled" : ""} onclick="removeScrambleToken(${id})">${scrambleTokensText[id]}</button>
      `).join("")
    : `<span class="scramble-placeholder">Click the words below in the right order...</span>`;

  const poolHtml = scramblePoolIds.map(id => `
    <button class="scramble-token motion-btn" ${isScrambleChecked ? "disabled" : ""} onclick="placeScrambleToken(${id})">${scrambleTokensText[id]}</button>
  `).join("");

  const canCheck = scrambleAnswerIds.length === scrambleTokensText.length && !isScrambleChecked;

  container.innerHTML = `
    <div class="scramble-arena">
      <div class="guess-turn-header">
        <span class="player-turn-tag" style="color: ${curP.id === 0 ? '#2563eb' : '#ea580c'};">
          🧩 [UNSCRAMBLE FOR ${curP.name.toUpperCase()}]:
        </span>
        <span class="word-counter-badge">Sentence ${(currentScrambleIndex % list.length) + 1} / ${list.length}</span>
      </div>

      <div class="clue-card">
        <div class="clue-icon">💬</div>
        <div class="clue-text">Nghĩa: "${currentItem.vi}"</div>
      </div>

      <div class="scramble-answer-area" id="scrambleAnswerArea">${answerHtml}</div>
      <div class="scramble-pool" id="scramblePool">${poolHtml}</div>

      <div class="guess-actions-bar">
        <button class="pixel-btn motion-btn btn-sm btn-skip" onclick="resetScrambleAnswer()">RESET ↩</button>
        <button class="pixel-btn motion-btn btn-hint" onclick="checkScrambleAnswer()" ${canCheck ? "" : "disabled"}>CHECK ✅</button>
      </div>
    </div>
  `;

  if (!isScrambleChecked) {
    logMsg(`SENTENCE SCRAMBLE: ${curP.name}'s turn! Click the words in the right order.`);
  }
}

function placeScrambleToken(id) {
  if (isScrambleChecked) return;
  const idx = scramblePoolIds.indexOf(id);
  if (idx === -1) return;
  scramblePoolIds.splice(idx, 1);
  scrambleAnswerIds.push(id);
  loadGame();
}

function removeScrambleToken(id) {
  if (isScrambleChecked) return;
  const idx = scrambleAnswerIds.indexOf(id);
  if (idx === -1) return;
  scrambleAnswerIds.splice(idx, 1);
  scramblePoolIds.push(id);
  loadGame();
}

function resetScrambleAnswer() {
  if (isScrambleChecked) return;
  scramblePoolIds = [...scramblePoolIds, ...scrambleAnswerIds];
  scrambleAnswerIds = [];
  loadGame();
}

// Kiểm tra toàn bộ câu: đúng thì cộng điểm, sai thì trừ 1 tym
function checkScrambleAnswer() {
  if (currentGameType !== "scramble" || isScrambleChecked) return;
  if (scrambleAnswerIds.length !== scrambleTokensText.length) return;

  const lesson = LESSON_DATABASE[currentLessonKey];
  const list = lesson.scramble || [];
  if (!list.length) return;

  const currentItem = list[currentScrambleIndex % list.length];
  const curP = players[currentTurn];
  if (curP.hearts <= 0) return;

  isScrambleChecked = true;
  const isCorrect = scrambleAnswerIds.every((id, idx) => id === idx);

  document.querySelectorAll(".placed-token").forEach(btn => {
    btn.disabled = true;
    btn.classList.add(isCorrect ? "correct-flash" : "wrong-flash");
  });

  let isOver = false;
  if (isCorrect) {
    curP.score += 15;
    logMsg(`🎉 CORRECT! ${curP.name} unscrambled the sentence! +15 PTS!`);
    renderScoreboard();
    isOver = checkWinCondition(curP);
  } else {
    logMsg(`❌ WRONG ORDER! Correct sentence: "${currentItem.correct}". ${curP.name} lost 1 heart.`);
    isOver = deductHeart(curP);
  }

  if (isOver) return; // Dừng lượt chơi khi đã thắng hoặc thua

  setTimeout(() => {
    currentScrambleIndex++;
    scrambleTokensText = [];
    scramblePoolIds = [];
    scrambleAnswerIds = [];
    isScrambleChecked = false;
    currentTurn = (currentTurn + 1) % 2;
    renderScoreboard();
    loadGame();
  }, 1800);
}