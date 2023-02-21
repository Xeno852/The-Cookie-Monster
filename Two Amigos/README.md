# Two Amigos

Personal quick boilerplate for me to start spin up two servers for a cookie stealing attack. I will make this more barebones later (as I will with my other templates), and more vulnerability-agnostic. In this model, one server acts as the stealer, who will steal the cookie from the victim and then there is the reciver who will receive the cookie sent from the stealer in order to give it to the attacker.

The main purpouse of this is if you have found an XSS vulnerability on a website, and you want to steal the cookie of the victim and the following is true: Victim has a loggen in session, you have a way of delevering the XSS payload to the victim, and you do not have a way of seeing anything about the victim (if this part is not true, it just makes it easier).

## Limitations
With proper CSPs in place, this attack can be mitigated. Some bypasses can include using location.href to bypass some CSPs.
