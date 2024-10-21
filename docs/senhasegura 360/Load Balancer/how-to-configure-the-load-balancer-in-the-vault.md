# How to configure the load balancer in the vault 

Once you've installed , you must configure it within the senhasegura vault. To do this, follow the steps below:

1. First, you need to create a network subinterface. To do this, open the subinterface configuration file by typing the command below:

`bash
vim /etc/network/interfaces.d/eth0:1
`

2. In the configuration file, you must create the rules and properties for this subinterface. To do this, enter the information below:

`bash
 auto eth0:1
 iface eth0:1 inet static
 	address 

 	netmask 255.255.255.255
 	pre-up arptables -t filter -F INPUT
 	pre-up arptables -t filter -F OUTPUT
 	pre-up arptables -t filter -A INPUT -d 
 -j DROP
 	post-up arptables -t filter -A OUTPUT -s 
 -j mangle --mangle-ip-s 

`

3. In the file, you'll notice two variables related to the environment you're configuring. So pay attention to these variables:
    1. `
` must be replaced by the same VIP address configured when installing the load balancer.
    2. `
`, which must be replaced by the IP address of the senhasegura vault's network interface.
4. Save and close the file with the  command.
5. With the configuration file created, you'll need to apply the settings. To do this, run the command:

`bash
ifup eth0:1
`

6. Validate the IP address configuration with the following command:

`bash
ip a
`

The command output should look like below:

`bash
1: 	lo: 
 mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
	link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
	inet 127.0.0.1/8 scope host lo
		valid_lft forever preferred_lft forever

2: 	eth0: 
 mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
	link/ether 08:00:27:b3:b8:dc brd ff:ff:ff:ff:ff:ff
	inet 192.168.1.15/24 brd 192.168.1.255 scope global dynamic eth0
		valid_lft 82768sec preferred_lft 82768sec
	inet 192.168.1.200/24 brd 192.168.1.255 scope global secondary eth0:1
		valid_lft forever preferred_lft forever
`

:::(info) (Info)
Once the configuration is complete, the vault's license will expire and must be renewed.
:::

---
Do you still have questions? Reach out to the .