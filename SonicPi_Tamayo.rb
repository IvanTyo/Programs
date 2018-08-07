live_loop :my_melody do
  play 20, amp: 0.2
  sleep 1
  play 60
end
sleep 1

live_loop :boom do
  with_fx :reverb, room: 1 do
    sample :bd_boom, amp: 15, rate: 1
  end
  sleep 2
end


live_loop :misc_crow do
  sleep 4
  sample :misc_crow, amp: 0.4, rate: 1, pan: 1
  sleep 5
  
end

live_loop :ambi_lunar_land do
  sample :ambi_lunar_land, amp: 0.2, rate: 1
  sleep 1
end

live_loop :bass_hard_c do
  sample :bass_hard_c, amp: 0.6, rate: 1
  sleep 0.5
end

live_loop :drum_snare_soft do
  sleep 1
  sample :drum_snare_soft, amp: 10, rate: 1.5, pan: 0.6
  sleep 1
end

live_loop :drum_cymbal_pedal do
  sleep 0.5
  sample:elec_bong, amp: 5, rate: 0.5, pan: -0.9
  sleep 5
end

live_loop :chord do
  sleep 2
  play (chord :D, :major7, invert: 2), release: 3, amp: 2
  sleep 6
end


