/* Highway Radio — Custom UI powered by YouTube IFrame API */

(() => {
  const els = {
    dock: document.getElementById("player"),
    disc: document.getElementById("disc"),
    cover: document.getElementById("cover"),
    title: document.getElementById("title"),
    artist: document.getElementById("artist"),
    play: document.getElementById("play"),
    prev: document.getElementById("prev"),
    next: document.getElementById("next"),
    shuffle: document.getElementById("shuffle"),
    listBtn: document.getElementById("listBtn"),
    shareBtn: document.getElementById("shareBtn"),
    list: document.getElementById("list"),
    listItems: document.getElementById("listItems"),
    seek: document.getElementById("seek"),
    seekFill: document.getElementById("seekFill"),
    seekKnob: document.getElementById("seekKnob"),
    tCur: document.getElementById("tCur"),
    tDur: document.getElementById("tDur"),
    clock: document.getElementById("clock"),
    km: document.getElementById("kmCount"),
  };

  const DEFAULT_TRACKS = [
    { id: 1, title: "Eyy Bidda Idhi Naa Adda", artist: "DSP | Pushpa | Allu Arjun", youtubeId: "pHHig1XBML0", cover: "https://img.youtube.com/vi/pHHig1XBML0/hqdefault.jpg" },
    { id: 2, title: "Hey Pillagaada", artist: "Sekhar Kammula | Fidaa | Varun Tej", youtubeId: "k9DMXBFHEH4", cover: "https://img.youtube.com/vi/k9DMXBFHEH4/hqdefault.jpg" },
    { id: 3, title: "Bujji Bangaram", artist: "Chaitan Bharadwaj | Guna 369", youtubeId: "VQr7lvMCrOs", cover: "https://img.youtube.com/vi/VQr7lvMCrOs/hqdefault.jpg" },
    { id: 4, title: "Lingi Lingi Lingidi", artist: "Midhun Mukundan | Kotabommali P.S", youtubeId: "Kcea7QI2BHs", cover: "https://img.youtube.com/vi/Kcea7QI2BHs/hqdefault.jpg" },
    { id: 5, title: "Manasu Maree", artist: "Amit Trivedi | V | Nani", youtubeId: "Pal0uollc4E", cover: "https://img.youtube.com/vi/Pal0uollc4E/hqdefault.jpg" },
    { id: 6, title: "Bullet", artist: "DSP | The Warriorr | Ram Pothineni", youtubeId: "WgrLE4Fqxeo", cover: "https://img.youtube.com/vi/WgrLE4Fqxeo/hqdefault.jpg" },
    { id: 7, title: "Mellaga Tellarindoi", artist: "Shatamanam Bhavati | Sharwanand", youtubeId: "e5T1gbGJuAc", cover: "https://img.youtube.com/vi/e5T1gbGJuAc/hqdefault.jpg" },
    { id: 8, title: "Gopikamma", artist: "Mukunda | Varun Tej, Pooja Hegde", youtubeId: "D4sTViBfjVE", cover: "https://img.youtube.com/vi/D4sTViBfjVE/hqdefault.jpg" },
    { id: 9, title: "Arere Yekkada", artist: "DSP | Nenu Local | Nani", youtubeId: "PKzA-BRCTQ0", cover: "https://img.youtube.com/vi/PKzA-BRCTQ0/hqdefault.jpg" },
    { id: 10, title: "Whattey Beauty", artist: "Mahati Swara Sagar | Bheeshma | Nithiin", youtubeId: "uyiuYfSAc-A", cover: "https://img.youtube.com/vi/uyiuYfSAc-A/hqdefault.jpg" },
    { id: 11, title: "Nuvvu Navvukuntu", artist: "Bheems Ceciroleo | MAD", youtubeId: "Iju38nOI9cg", cover: "https://img.youtube.com/vi/Iju38nOI9cg/hqdefault.jpg" },
    { id: 12, title: "Priyathama Priyathama", artist: "Thaman S | Majili | Naga Chaitanya", youtubeId: "BpINyS4k7Uw", cover: "https://img.youtube.com/vi/BpINyS4k7Uw/hqdefault.jpg" },
    { id: 13, title: "Nijame Ne", artist: "Sid Sriram | Ooru Peru Bhairavakona", youtubeId: "8FOG4vhc8q8", cover: "https://img.youtube.com/vi/8FOG4vhc8q8/hqdefault.jpg" },
    { id: 14, title: "Undipova", artist: "Shekar Chandra | Savaari", youtubeId: "Pm77L5Loazc", cover: "https://img.youtube.com/vi/Pm77L5Loazc/hqdefault.jpg" },
    { id: 15, title: "Bujji Thalli", artist: "DSP | Thandel | Naga Chaitanya, Sai Pallavi", youtubeId: "DDBUrQ8bdlc", cover: "https://img.youtube.com/vi/DDBUrQ8bdlc/hqdefault.jpg" },
    { id: 16, title: "Daakko Daakko Meka", artist: "DSP | Pushpa | Allu Arjun", youtubeId: "irsLfoFb-W0", cover: "https://img.youtube.com/vi/irsLfoFb-W0/hqdefault.jpg" },
    { id: 17, title: "Yemaindho Theliyadu Naaku", artist: "DSP | MCA | Nani, Sai Pallavi", youtubeId: "ySoiqO0U5BY", cover: "https://img.youtube.com/vi/ySoiqO0U5BY/hqdefault.jpg" },
    { id: 18, title: "Sittharala Sirapadu", artist: "Thaman S | AlaVaikunthapurramuloo", youtubeId: "3QNW3guTYU8", cover: "https://img.youtube.com/vi/3QNW3guTYU8/hqdefault.jpg" },
    { id: 19, title: "Gudilo Badilo", artist: "DSP | DJ Duvvada Jagannadham", youtubeId: "d4UswR0Qt5Y", cover: "https://img.youtube.com/vi/d4UswR0Qt5Y/hqdefault.jpg" },
    { id: 20, title: "Laahe Laahe", artist: "Acharya | Chiranjeevi, Ram Charan", youtubeId: "65P3H1idDQE", cover: "https://img.youtube.com/vi/65P3H1idDQE/hqdefault.jpg" },
    { id: 21, title: "Ra Ra Reddy I'm Ready", artist: "Macherla Niyojakavargam | Nithiin", youtubeId: "by4USgMmICE", cover: "https://img.youtube.com/vi/by4USgMmICE/hqdefault.jpg" },
    { id: 22, title: "Srivalli", artist: "DSP | Sid Sriram | Pushpa | Allu Arjun", youtubeId: "txHO7PLGE3o", cover: "https://img.youtube.com/vi/txHO7PLGE3o/hqdefault.jpg" },
    { id: 23, title: "Madhura Nagarilo", artist: "M.M.Keeravani | PelliSandaD", youtubeId: "_6nKjFloSDs", cover: "https://img.youtube.com/vi/_6nKjFloSDs/hqdefault.jpg" },
    { id: 24, title: "Eyy Bidda Idhi Naa Adda (Full)", artist: "DSP | Pushpa | Allu Arjun", youtubeId: "jGetqo_SC9U", cover: "https://img.youtube.com/vi/jGetqo_SC9U/hqdefault.jpg" },
    { id: 25, title: "Bullet Song", artist: "DSP | The Warriorr | Ram Pothineni", youtubeId: "f0T6jFsWMak", cover: "https://img.youtube.com/vi/f0T6jFsWMak/hqdefault.jpg" },
    { id: 26, title: "Yevandoi Nani Garu", artist: "DSP | MCA | Nani, Sai Pallavi", youtubeId: "y9gUpVWcELU", cover: "https://img.youtube.com/vi/y9gUpVWcELU/hqdefault.jpg" },
    { id: 27, title: "Saami Saami", artist: "DSP | Pushpa | Allu Arjun", youtubeId: "-ZAnN6groJw", cover: "https://img.youtube.com/vi/-ZAnN6groJw/hqdefault.jpg" },
    { id: 28, title: "Nakkileesu Golusu", artist: "Karuna Kumar | Rakshit, Nakshatra", youtubeId: "o4ox_7oLabg", cover: "https://img.youtube.com/vi/o4ox_7oLabg/hqdefault.jpg" },
    { id: 29, title: "College Papa", artist: "Bheems Ceciroleo | MAD", youtubeId: "EroMPt0nY18", cover: "https://img.youtube.com/vi/EroMPt0nY18/hqdefault.jpg" },
    { id: 30, title: "Inkem Inkem Kavale", artist: "Gopi Sundar | Geetha Govindam | Vijay Devarakonda", youtubeId: "cC8AmhPUJPA", cover: "https://img.youtube.com/vi/cC8AmhPUJPA/hqdefault.jpg" },
    { id: 31, title: "Srivalli (Lyrical)", artist: "DSP | Sid Sriram | Pushpa | Allu Arjun", youtubeId: "5IEbR79kBPY", cover: "https://img.youtube.com/vi/5IEbR79kBPY/hqdefault.jpg" },
    { id: 32, title: "Vachindamma", artist: "Geetha Govindam | Vijay Devarakonda", youtubeId: "xVcoYF--0mM", cover: "https://img.youtube.com/vi/xVcoYF--0mM/hqdefault.jpg" },
    { id: 33, title: "Yenti Yenti", artist: "Geetha Govindam | Vijay Devarakonda", youtubeId: "LOZNKZfiFUw", cover: "https://img.youtube.com/vi/LOZNKZfiFUw/hqdefault.jpg" },
    { id: 34, title: "Jala Jala Jalapaatham", artist: "DSP | Uppena | Vaisshnav Tej", youtubeId: "PTpimuHzlvE", cover: "https://img.youtube.com/vi/PTpimuHzlvE/hqdefault.jpg" },
    { id: 35, title: "Saranga Dariya", artist: "Pawan Ch | Love Story | Naga Chaitanya, Sai Pallavi", youtubeId: "1ozmyl1ZEyY", cover: "https://img.youtube.com/vi/1ozmyl1ZEyY/hqdefault.jpg" },
    { id: 36, title: "Tillu Anna DJ Pedithe (Lyrical)", artist: "Ram Miriyala | DJ Tillu", youtubeId: "I8c0-NEBqL0", cover: "https://img.youtube.com/vi/I8c0-NEBqL0/hqdefault.jpg" },
    { id: 37, title: "O Antava Mawa (Lyrical)", artist: "DSP | Pushpa | Allu Arjun, Samantha", youtubeId: "u6BoyOceiPE", cover: "https://img.youtube.com/vi/u6BoyOceiPE/hqdefault.jpg" },
    { id: 38, title: "Okey Oka Lokam", artist: "Sid Sriram | Sashi | Aadi", youtubeId: "hP93gA8F6sM", cover: "https://img.youtube.com/vi/hP93gA8F6sM/hqdefault.jpg" },
    { id: 39, title: "Choosi Chudangane", artist: "Chalo | Naga Shaurya, Rashmika", youtubeId: "_JVghQCWnRI", cover: "https://img.youtube.com/vi/_JVghQCWnRI/hqdefault.jpg" },
    { id: 40, title: "The Life Of Ram", artist: "Govind Vasantha | Jaanu | Sharwanand, Samantha", youtubeId: "2a34XyiZO14", cover: "https://img.youtube.com/vi/2a34XyiZO14/hqdefault.jpg" },
    { id: 41, title: "Mastaaru Mastaaru", artist: "GV Prakash Kumar | SIR | Dhanush", youtubeId: "AXSm49NGkg8", cover: "https://img.youtube.com/vi/AXSm49NGkg8/hqdefault.jpg" },
    { id: 42, title: "Samajavaragamana (4K)", artist: "Thaman S | AlaVaikunthapurramuloo | Allu Arjun", youtubeId: "OCg6BWlAXSw", cover: "https://img.youtube.com/vi/OCg6BWlAXSw/hqdefault.jpg" },
    { id: 43, title: "Samajavaragamana (Telugu)", artist: "Thaman S | AlaVaikunthapurramuloo | Allu Arjun", youtubeId: "Thf60JU8E98", cover: "https://img.youtube.com/vi/Thf60JU8E98/hqdefault.jpg" },
    { id: 44, title: "Seeti Maar", artist: "DSP | DJ Duvvada Jagannadham | Allu Arjun", youtubeId: "F5X694sak5U", cover: "https://img.youtube.com/vi/F5X694sak5U/hqdefault.jpg" },
    { id: 45, title: "Vachinde", artist: "Sekhar Kammula | Fidaa | Varun Tej, Sai Pallavi", youtubeId: "YFfEFbC9_XQ", cover: "https://img.youtube.com/vi/YFfEFbC9_XQ/hqdefault.jpg" },
    { id: 46, title: "Tillu Anna DJ Pedithe (Video)", artist: "Ram Miriyala | DJ Tillu", youtubeId: "M-954V9LORI", cover: "https://img.youtube.com/vi/M-954V9LORI/hqdefault.jpg" },
    { id: 47, title: "Ramuloo Ramulaa", artist: "Thaman S | AlaVaikunthapurramuloo | Allu Arjun", youtubeId: "wFAj0pW6xX0", cover: "https://img.youtube.com/vi/wFAj0pW6xX0/hqdefault.jpg" },
    { id: 48, title: "Oo Antava Mawa (Video)", artist: "DSP | Pushpa | Allu Arjun, Samantha", youtubeId: "u_wB6byrl5k", cover: "https://img.youtube.com/vi/u_wB6byrl5k/hqdefault.jpg" },
    { id: 49, title: "Kurchi Madathapetti", artist: "Thaman S | Guntur Kaaram | Mahesh Babu, Sreeleela", youtubeId: "gh3FyLT7WVg", cover: "https://img.youtube.com/vi/gh3FyLT7WVg/hqdefault.jpg" },
    { id: 50, title: "Butta Bomma", artist: "Thaman S | AlaVaikunthapurramuloo | Allu Arjun", youtubeId: "2mDCVzruYzQ", cover: "https://img.youtube.com/vi/2mDCVzruYzQ/hqdefault.jpg" },
    { id: 51, title: "Tu Mera Lover", artist: "Bheems Ceciroleo | Mass Jathara | Ravi Teja, Sreeleela", youtubeId: "v3kc3Qw-M1A", cover: "https://img.youtube.com/vi/v3kc3Qw-M1A/hqdefault.jpg" }
  ];

  let tracks = [];
  let order = [];
  let orderIdx = 0;
  let ytPlayer = null;
  let ytReady = false;
  let isScrubbing = false;
  let pollTimer = null;
  let kmTimer = null;
  let shuffleOn = false; // Default shuffle to OFF for predictable sequential playback
  let consecutiveErrors = 0;
  let km = Number(localStorage.getItem("hr_km") || 0);

  const fmtTime = (s) => {
    if (!isFinite(s) || s < 0) return "0:00";
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${r}`;
  };

  const shuffleArray = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const buildOrder = () => {
    const idxs = tracks.map((_, i) => i);
    order = shuffleOn ? shuffleArray(idxs) : idxs;
    orderIdx = 0;
  };

  function renderList() {
    if (!els.listItems) return;
    els.listItems.innerHTML = "";
    tracks.forEach((t, i) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.innerHTML = `
        <span class="list__num">${i + 1}</span>
        <span class="t-title">${t.title}</span>
        <span class="t-artist">${t.artist}</span>
      `;
      btn.addEventListener("click", () => {
        playByIndex(i);
      });
      li.appendChild(btn);
      li.dataset.index = i;
      els.listItems.appendChild(li);
    });
  }

  function markActive(index) {
    if (!els.listItems) return;
    [...els.listItems.children].forEach((li) => {
      const isActive = Number(li.dataset.index) === index;
      li.classList.toggle("is-active", isActive);
      if (isActive) {
        li.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    });
  }

  function loadTrackUI(track) {
    if (!track) return;
    if (els.title) els.title.textContent = track.title;
    if (els.artist) els.artist.textContent = track.artist;
    
    // Set album art cover
    const coverUrl = track.cover || `https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg`;
    if (els.cover) {
      els.cover.src = coverUrl;
      els.cover.alt = `Album cover for ${track.title}`;
    }
  }

  function playByIndex(index) {
    if (index < 0 || index >= tracks.length) return;
    const posInOrder = order.indexOf(index);
    if (posInOrder !== -1) orderIdx = posInOrder;
    const track = tracks[index];
    loadTrackUI(track);
    markActive(index);
    
    if (ytReady && track && track.youtubeId) {
      try {
        ytPlayer.loadVideoById(track.youtubeId);
      } catch (err) {
        console.warn("ytPlayer.loadVideoById failed:", err);
      }
    }
  }

  function playCurrent() {
    if (order.length > 0) {
      playByIndex(order[orderIdx]);
    }
  }

  function step(delta) {
    if (order.length === 0) return;
    orderIdx = (orderIdx + delta + order.length) % order.length;
    playCurrent();
  }

  function setPlayingUI(playing) {
    if (els.dock) els.dock.classList.toggle("is-playing", playing);
    if (els.play) {
      els.play.setAttribute("aria-label", playing ? "Pause Track" : "Play Track");
      els.play.setAttribute("title", playing ? "Pause" : "Play");
    }
  }

  // ── YouTube IFrame API ─────────────────────────────────────
  window.onYouTubeIframeAPIReady = function () {
    ytPlayer = new YT.Player("yt-player", {
      height: "0",
      width: "0",
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        playsinline: 1,
        modestbranding: 1,
        rel: 0,
        fs: 0
      },
      events: {
        onReady: () => {
          ytReady = true;
          if (els.play) els.play.disabled = false;
          if (tracks.length > 0) {
            const initialTrack = tracks[order[orderIdx]];
            if (initialTrack && initialTrack.youtubeId) {
              ytPlayer.cueVideoById(initialTrack.youtubeId);
            }
          }
        },
        onStateChange: onPlayerStateChange,
        onError: (err) => {
          console.warn("YouTube player error:", err.data, "code:", err);
          consecutiveErrors++;
          if (consecutiveErrors < Math.min(4, tracks.length)) {
            if (els.title) els.title.textContent = "Track unavailable - playing next...";
            setTimeout(() => step(1), 1500);
          } else {
            if (els.title) els.title.textContent = "Playback paused. Click any song to play.";
            setPlayingUI(false);
            consecutiveErrors = 0;
          }
        }
      },
    });
  };

  function onPlayerStateChange(e) {
    if (e.data === YT.PlayerState.PLAYING) {
      consecutiveErrors = 0; // Reset error count on clean play
      setPlayingUI(true);
      startPoll();
      startKmTimer();
    } else if (e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.BUFFERING) {
      if (e.data === YT.PlayerState.PAUSED) setPlayingUI(false);
      stopPoll();
      stopKmTimer();
    } else if (e.data === YT.PlayerState.ENDED) {
      step(1);
    }
  }

  function startPoll() {
    stopPoll();
    pollTimer = setInterval(() => {
      if (!ytPlayer || isScrubbing) return;
      try {
        const cur = ytPlayer.getCurrentTime?.() || 0;
        const dur = ytPlayer.getDuration?.() || 0;
        updateSeekUI(cur, dur);
      } catch (err) {}
    }, 250);
  }

  function stopPoll() {
    clearInterval(pollTimer);
  }

  function updateSeekUI(cur, dur) {
    const pct = dur ? Math.min(100, (cur / dur) * 100) : 0;
    if (els.seekFill) els.seekFill.style.width = pct + "%";
    if (els.seekKnob) els.seekKnob.style.left = pct + "%";
    if (els.tCur) els.tCur.textContent = fmtTime(cur);
    if (els.tDur) els.tDur.textContent = fmtTime(dur);
    if (els.seek) els.seek.setAttribute("aria-valuenow", Math.round(pct));
  }

  // Odometer timer
  function startKmTimer() {
    stopKmTimer();
    kmTimer = setInterval(() => {
      km += 0.2;
      if (els.km) els.km.textContent = `${km.toFixed(1)} km driven`;
      localStorage.setItem("hr_km", km.toFixed(1));
    }, 2000);
  }
  function stopKmTimer() { clearInterval(kmTimer); }

  // ── Event Listeners ────────────────────────────────────────
  if (els.play) {
    els.play.addEventListener("click", () => {
      if (!ytReady) return;
      try {
        const state = ytPlayer.getPlayerState?.();
        if (state === YT.PlayerState.PLAYING) {
          ytPlayer.pauseVideo();
        } else {
          ytPlayer.playVideo();
        }
      } catch (err) {
        console.warn("Play/pause error:", err);
      }
    });
  }

  if (els.next) els.next.addEventListener("click", () => step(1));
  if (els.prev) els.prev.addEventListener("click", () => step(-1));

  if (els.shuffle) {
    els.shuffle.classList.toggle("is-on", shuffleOn);
    els.shuffle.addEventListener("click", () => {
      shuffleOn = !shuffleOn;
      els.shuffle.classList.toggle("is-on", shuffleOn);
      els.shuffle.setAttribute("aria-pressed", String(shuffleOn));
      const currentTrackIndex = order[orderIdx];
      buildOrder();
      orderIdx = Math.max(0, order.indexOf(currentTrackIndex));
    });
  }

  if (els.listBtn) {
    els.listBtn.addEventListener("click", () => {
      if (els.list) {
        const closed = els.list.classList.toggle("is-closed");
        els.listBtn.setAttribute("aria-expanded", String(!closed));
      }
    });
  }

  if (els.shareBtn) {
    els.shareBtn.addEventListener("click", () => {
      if (navigator.share) {
        navigator.share({
          title: "Rockstar Telugu Ambient Music Player",
          url: window.location.href
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    });
  }

  // ── Seek Bar Draggable & Keyboard Support ──────────────────
  function scrubTo(clientX) {
    if (!els.seek) return 0;
    const rect = els.seek.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const dur = ytPlayer?.getDuration?.() || 0;
    updateSeekUI(pct * dur, dur);
    return pct * dur;
  }

  if (els.seek) {
    els.seek.addEventListener("pointerdown", (e) => {
      isScrubbing = true;
      scrubTo(e.clientX);
      els.seek.setPointerCapture(e.pointerId);
    });

    els.seek.addEventListener("pointermove", (e) => {
      if (isScrubbing) scrubTo(e.clientX);
    });

    const finishScrubbing = (e) => {
      if (!isScrubbing) return;
      const seekTime = scrubTo(e.clientX);
      ytPlayer?.seekTo?.(seekTime, true);
      isScrubbing = false;
    };

    els.seek.addEventListener("pointerup", finishScrubbing);
    els.seek.addEventListener("pointercancel", finishScrubbing);

    els.seek.addEventListener("keydown", (e) => {
      if (!ytPlayer) return;
      const cur = ytPlayer.getCurrentTime?.() || 0;
      const dur = ytPlayer.getDuration?.() || 0;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        const nextTime = Math.min(dur, cur + 5);
        ytPlayer.seekTo(nextTime, true);
        updateSeekUI(nextTime, dur);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prevTime = Math.max(0, cur - 5);
        ytPlayer.seekTo(prevTime, true);
        updateSeekUI(prevTime, dur);
      }
    });
  }

  // Global Keyboard Shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.code === "Space" && e.target !== els.play && e.target !== els.seek) {
      e.preventDefault();
      if (els.play) els.play.click();
    }
  });

  // ── Clock ──────────────────────────────────────────────────
  function tickClock() {
    const now = new Date();
    let h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, "0");
    const ampm = h >= 12 ? "pm" : "am";
    h = h % 12 || 12;
    if (els.clock) els.clock.textContent = `${h}:${m} ${ampm}`;
  }
  tickClock();
  setInterval(tickClock, 10000);

  // ── Boot Sequence ──────────────────────────────────────────
  if (els.km) els.km.textContent = `${km.toFixed(1)} km driven`;

  const initPlaylist = (loadedTracks) => {
    tracks = (loadedTracks && loadedTracks.length > 0) ? loadedTracks : DEFAULT_TRACKS;
    renderList();
    buildOrder();
    loadTrackUI(tracks[order[0]]);
    markActive(order[0]);

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
  };

  fetch("data/tracks.json")
    .then((r) => {
      if (!r.ok) throw new Error("HTTP error " + r.status);
      return r.json();
    })
    .then((data) => initPlaylist(data))
    .catch(() => {
      fetch("tracks.json")
        .then((r) => r.json())
        .then((data) => initPlaylist(data))
        .catch(() => initPlaylist(DEFAULT_TRACKS));
    });
})();
